import AdminCategory from './AdminCategory';
import AdminGuide from './AdminGuide';
import ButtonDeafult from '../../components/atoms/buttons/ButtonDefault';
import BigCard from '../../components/BigCard';
import { useGetMagazineListApi } from '../../hooks/useMagazineApi';

import './admin.css';

const AdminMagazine = () => {
  const { data: magazineList } = useGetMagazineListApi();

  return (
    <>
      <section className="admin_area">
        <AdminCategory />
        <section className="admin_cont">
          <AdminGuide />
          <div className="main_title flex_default">
            <h4>매거진 관리</h4>
            <div className="buttons">
              <ButtonDeafult
                text={'매거진 발행'}
                backgroundcolor={'#d9d9d9'}
                color={'#575757'}
              />
              <ButtonDeafult text={'선택 삭제'} />
            </div>
          </div>
          <div className="admin_magazine_list">
            {magazineList &&
              magazineList.map((magazine, index) => {
                return <BigCard data={magazine} key={index} />;
              })}
          </div>
        </section>
      </section>
    </>
  );
};

export default AdminMagazine;
