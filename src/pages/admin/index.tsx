import { useLocation } from 'react-router-dom';
import AdminCategory from './AdminCategory';
import AdminGuide from './AdminGuide';
import ButtonDeafult from '../../components/atoms/buttons/ButtonDefault';
import AdminTable from './AdminTable';

import './admin.css';

const getTableData = (pathname: string) => {
  let theadTitle: string[] = [];
  let tbodyContent: { nickname: string; email?: string; title?: string }[] = [];

  if (pathname === '/admin') {
    theadTitle = ['No', '닉네임', '이메일', '관리'];
    tbodyContent = [
      { nickname: '메론빵 거북이', email: 'turtle_001@gmail.com' },
      { nickname: '식빵맨', email: 'toast@gmail.com' },
      { nickname: '포도파이', email: 'grape@gmail.com' },
    ];
  } else if (pathname === '/admin-community') {
    theadTitle = ['No', '작성자', '제목', '관리'];
    tbodyContent = [
      { nickname: '메론빵 거북이', title: '조보아씨 이리로 와봐유' },
      { nickname: '식빵맨', title: '추천글만 남겨야하나요? 하..' },
      {
        nickname: '포도파이',
        title: '엄마손파이와 꼭 닮은 파이 맛집',
      },
    ];
  } else if (pathname === '/admin-recipe') {
    theadTitle = ['No', '작성자', '제목', '관리'];
    tbodyContent = [
      { nickname: '메론빵 거북이', title: '때깔 고운 메론빵 굽는 방법' },
      {
        nickname: '복숭아 마카롱',
        title: '모닝빵으로 샌드위치를 만들어보셨나요?!',
      },
      {
        nickname: '메가커피 빨대도둑',
        title: '민트 초코 부침개를 만들었습니다.....',
      },
      {
        nickname: '엘리스토끼',
        title: '글루텐 프리 단호박 파운드를 소개합니다.',
      },
    ];
  }

  return { theadTitle, tbodyContent };
};

const AdminMain: React.FC = () => {
  const location = useLocation();
  const { theadTitle, tbodyContent } = getTableData(location.pathname);

  return (
    <>
      <section className="admin_area">
        <AdminCategory />
        <section className="admin_cont">
          <AdminGuide />
          <div className="main_title flex_default">
            <h4>사용자 관리</h4>
            <ButtonDeafult text={'선택 삭제'} />
          </div>
          <AdminTable theadTitle={theadTitle} tbodyContent={tbodyContent} />
        </section>
      </section>
    </>
  );
};

export default AdminMain;
