import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/home';
import MyPage from '../pages/mypage';
import LoginPage from '../pages/login/Login.tsx';
import SignupPage from '../pages/signup';
import CommunityPage from '../pages/community';
import NearByPage from '../pages/community/nearby.tsx';
import DetailPage from '../pages/community/detail.tsx';

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/nearby" element={<NearByPage />} />
        <Route path="/community/nearby/:id" element={<DetailPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}
