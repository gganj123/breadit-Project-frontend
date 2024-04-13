import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type User = {
  id?: string;
  nickname?: string;
  email?: string;
  accessToken?: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};
// AuthProvider 구현
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

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

  // 특정 유저 정보 조회
  const fetchUserData = async (userId: string, accessToken: string) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_SERVER}/users/${userId}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch user data:', error);
      setLoading(false);
    }
  };

  // 로그인
  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_SERVER}/users/login`,
        {
          email,
          password,
        }
      );
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
  const logout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      localStorage.clear();
      setUser(null);
      navigate('/');
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
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
