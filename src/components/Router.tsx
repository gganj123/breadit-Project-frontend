import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/home';
import MyPage from '../pages/mypage';
import LoginPage from '../pages/login';
import SignupPage from '../pages/signup';
import CommunityPage from '../pages/community';

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}
