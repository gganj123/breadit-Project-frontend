import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const apiUrl = `${import.meta.env.VITE_BACKEND_SERVER}`;

type User = {
  id?: string;
  nickname?: string;
  email?: string;
  accessToken?: string;
  profile?: string; // 프로필 이미지 추가
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUserInfo: (userData: Partial<User>) => Promise<void>; // 사용자 정보 업데이트 함수 추가
  deleteUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};
// AuthProvider 구현
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const accessToken = localStorage.getItem('accessToken');
      const userId = localStorage.getItem('id');
      if (accessToken && userId) {
        await fetchUserData(userId, accessToken);
      }
    };
    loadUser();
  }, []);

  // 유저 정보 조회
  const fetchUserData = async (userId: string, accessToken: string) => {
    try {
      setLoading(true);
      const response = await axios.get(`${apiUrl}/users/${userId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setUser(response.data); // 사용자 데이터와 프로필 이미지 URL 포함
      console.log(response.data);

      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch user data:', error);
      setLoading(false);
    }
  };
  // 유저 정보 수정
  const updateUserInfo = async (userData: Partial<User>) => {
    if (!user) return;
    setLoading(true);
    try {
      const userId = localStorage.getItem('id');
      const response = await axios.put(`${apiUrl}/users/${userId}`, userData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      setUser({ ...user, ...response.data }); // 업데이트된 정보로 상태 업데이트
      navigate('/mypage');
      console.log('User info updated successfully');
      console.log(user);
    } catch (error) {
      console.error('Error updating user info:', error);
    } finally {
      setLoading(false);
    }
  };

  // 로그인
  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${apiUrl}/users/login`, {
        email,
        password,
      });
      const { accessToken, refreshToken, decodedAccessToken } = response.data;
      console.log('로그인 성공:', {
        accessToken,
        refreshToken,
        decodedAccessToken,
      });
      console.log(response.data.decodedAccessToken);
      const userId = decodedAccessToken.userId;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('id', userId);

      navigate('/');
      await fetchUserData(userId, accessToken);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  // 로그아웃
  const logout = async () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      try {
        await axios.post(
          `${apiUrl}/users/logout`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        );
        localStorage.clear();
        setUser(null);
        navigate('/');
      } catch (error) {
        console.error('Error during logout:', error);
      }
    }
  };

  // 회원 탈퇴
  const deleteUser = async () => {
    if (
      window.confirm(
        '정말로 회원 탈퇴하시겠습니까? 이 작업은 되돌릴 수 없습니다.'
      )
    ) {
      setLoading(true);
      try {
        const userId = localStorage.getItem('id');
        await axios.delete(`${apiUrl}/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        localStorage.clear();
        setUser(null);
        navigate('/');
        alert('회원 탈퇴가 성공적으로 처리되었습니다.');
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('회원 탈퇴에 실패했습니다.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, logout, updateUserInfo, deleteUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthProvider;
