/**
 * 사용자 인증 상태를 관리하기 위한 컨텍스트
 * 사용자의 로그인 상태를 관리하고,
 * 로그인 및 로그아웃 함수를 제공하여 컴포넌트에서 쉽게 사용자 인증을 처리할 수 있습니다.
 */
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

type User = {
  id?: string;
  name?: string;
  email?: string;
  accessToken?: string;
};

type AuthContextType = {
  user: User | null;
  setUser: (user: User) => void;
  login: (userData: User, accessToken: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

// 컨텍스트 프로바이더 컴포넌트
type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // 페이지 로드 시 로컬 스토리지에서 accessToken을 조회하고, 있을 경우 상태 업데이트
    const token = localStorage.getItem('accessToken');
    if (token) {
      setUser({ accessToken: token });
    }
  }, []);
  // 로그인 함수: 사용자 데이터와 액세스 토큰을 받아 로컬 스토리지에 저장하고 상태 업데이트
  const login = (userData: User, accessToken: string) => {
    localStorage.setItem('accessToken', accessToken);
    if (userData.id) {
      localStorage.setItem('id', userData.id);
    }
    setUser(userData);
  };
  const handleSetUser = (userData: User) => {
    setUser(userData);
  };
  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('id');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser: handleSetUser, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 컨텍스트를 사용하기 쉽게 하는 커스텀 훅
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
