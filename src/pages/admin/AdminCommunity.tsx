import { useEffect, useState } from 'react';
import axios from 'axios';
import AdminCategory from './AdminCategory';
import AdminGuide from './AdminGuide';
import ButtonDeafult from '../../components/atoms/buttons/ButtonDefault';
import AdminTable from './AdminTable';

import './admin.css';

const AdminMain: React.FC = () => {
  let theadTitle: string[] = ['No', '닉네임', '제목', '관리'];

  const [communityList, setCommunityList] = useState([]);
  let url = 'http://localhost:5000/api';
  useEffect(() => {
    axios
      .get(`${url}/posts`)
      .then((response) => {
        setCommunityList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <section className="admin_area">
        <AdminCategory />
        <section className="admin_cont">
          <AdminGuide />
          <div className="main_title flex_default">
            <h4>추천글 관리</h4>
            <ButtonDeafult text={'선택 삭제'} />
          </div>
          <AdminTable theadTitle={theadTitle} data={communityList} />
        </section>
      </section>
    </>
  );
};

export default AdminMain;
