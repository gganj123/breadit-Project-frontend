import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout.tsx';
import Home from '../pages/home/index.tsx';
import MyPage from '../pages/mypage/index.tsx';
import LoginPage from '../pages/login/Login.tsx';
import SignupPage from '../pages/signup/index.tsx';
import CommunityPage from '../pages/community/index.tsx';
import NearByPage from '../pages/community/nearby.tsx';
import DetailPage from '../pages/community/detail.tsx';
import MagazinePage from '../pages/magazine/index.tsx';

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="community/nearby" element={<NearByPage />} />
          <Route path="community/nearby/:id" element={<DetailPage />} />
          <Route path="magazine" element={<MagazinePage />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}
