import { useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

export default function useUser() {
  const { setUser } = useAuth();
  const userId = localStorage.getItem('userId');
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    async function fetchUser() {
      if (userId && accessToken) {
        const response = await axios.get(
          `http://localhost:5005/api/users/${userId}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        setUser(response.data); // 컨텍스트에 사용자 정보 저장
      }
    }
    fetchUser();
  }, [userId, accessToken, setUser]);

  return null; // 이 훅은 UI를 렌더링하지 않음
}
