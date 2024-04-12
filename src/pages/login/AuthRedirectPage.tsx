/**
 * 소셜로그인 후 리디렉션 페이지
 */
import axios from 'axios';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AuthRedirectPage = () => {
  const location = useLocation();
  const apiUrl = `${import.meta.env.VITE_BACKEND_SERVER}`;

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');
    console.log('요청 보내기');

    if (code) {
      axios
        .post(`${apiUrl}/users/kakaologin`, { code })
        .then((response) => {
          const { token } = response.data;
          console.log('프론트엔드가 받은 JWT 토큰:', token);
          localStorage.setItem('jwtToken', token);
        })
        .catch((error) => console.error('토큰 요청 에러:', error));
    }
  }, [location]);

  return (
    <div>
      <h1>인증 중...</h1>
    </div>
  );
};

export default AuthRedirectPage;
