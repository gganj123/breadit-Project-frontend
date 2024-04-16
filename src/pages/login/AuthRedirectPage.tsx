/**
 * 소셜로그인 후 리디렉션 되는 곳 - 인가코드 추출 후 서버에 보내기
 */
import axios from 'axios';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const AuthRedirectPage: React.FC = () => {
  const location = useLocation();
  const apiUrl = `${import.meta.env.VITE_BACKEND_SERVER}`;
  const { socialLoginSuccess } = useAuth();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');
    console.log('요청 보내기');
    console.log(code);

    if (code) {
      axios
        .post(`${apiUrl}/users/login/kakaosociallogin`, { code })
        .then((response) => {
          const { accessToken, refreshToken, user } = response.data;
          socialLoginSuccess(accessToken, refreshToken, user.id);
        })
        .catch((error) => console.error('토큰 요청 에러:', error));
    }
  }, [location]);

  return null; // UI 렌더링 없음
};

export default AuthRedirectPage;
