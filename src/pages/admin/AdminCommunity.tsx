import AdminCategory from './AdminCategory';
import AdminGuide from './AdminGuide';
import ButtonDeafult from '../../components/atoms/buttons/ButtonDefault';
import AdminTable from './AdminTable';

import './admin.css';

const AdminCommunity: React.FC = () => {
  let theadTitle: string[] = ['No', '작성자', '제목', '관리'];
  let tbodyContent: { nickname: string; title: string }[] = [
    { nickname: '메론빵 거북이', title: '조보아씨 이리로 와봐유' },
    { nickname: '식빵맨', title: '추천글만 남겨야하나요? 하..' },
    {
      nickname: '포도파이',
      title: '엄마손파이와 꼭 닮은 파이 맛집',
    },
  ];

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

export default AdminCommunity;
