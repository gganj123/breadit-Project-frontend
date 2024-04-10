import { useEffect, useState } from 'react';
import axios from 'axios';
import AdminCategory from './AdminCategory';
import AdminGuide from './AdminGuide';
import ButtonDeafult from '../../components/atoms/buttons/ButtonDefault';
import AdminTable from './AdminTable';

import './admin.css';

const AdminMain = () => {
  const [userList, setUserList] = useState([]);
  let apiUrl = `${import.meta.env.VITE_BACKEND_SERVER}`;

  const getUsersAPI = async () => {
    try {
      const response = await axios.get(`${apiUrl}/users`);
      setUserList(response.data);
      getUsersAPI();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsersAPI();
  }, []);

  const deleteUserAPI = async (id: string) => {
    try {
      await axios.delete(`${apiUrl}/users/${id}`);
      console.log(`${apiUrl}/users/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  let theadTitle: string[] = ['No', '닉네임', '이메일', '관리'];

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
          <AdminTable
            theadTitle={theadTitle}
            data={userList}
            deleteEvent={(id: string) => deleteUserAPI(id)}
          />
        </section>
      </section>
    </>
  );
};

export default AdminMain;
