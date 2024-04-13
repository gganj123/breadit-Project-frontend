import { useEffect, useState } from 'react';
import AdminCategory from './AdminCategory';
import AdminGuide from './AdminGuide';
import ButtonDeafult from '../../components/atoms/buttons/ButtonDefault';
import AdminTable from './AdminTable';
import {
  useGetUserListApi,
  useDeleteUserByIdApi,
} from '../../hooks/useUserApi';

import './admin.css';

type UserParameters = {
  _id: string;
  nickname: string;
  email: string;
};

const AdminMain = () => {
  const [userList, setUserList] = useState<UserParameters[]>([]);

  const getUserListQuery = useGetUserListApi();

  useEffect(() => {
    if (getUserListQuery.data) {
      setUserList(getUserListQuery.data);
    }
  }, [getUserListQuery.data]);

  const { mutate } = useDeleteUserByIdApi();

  const deleteUserIdFind = (id: string) => {
    mutate(id); // useDeleteUserByIdApi에 delete user id 전달
    console.log(id);
  };

  // const apiUrl: string = `${import.meta.env.VITE_BACKEND_SERVER}`;

  // const deleteUserAPI = async (id: string) => {
  //   try {
  //     await axios.delete(`${apiUrl}/users/${id}`);
  //     console.log(`${apiUrl}/users/${id}`);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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
            deleteEvent={(id: string) => deleteUserIdFind(id)}
          />
        </section>
      </section>
    </>
  );
};

export default AdminMain;
