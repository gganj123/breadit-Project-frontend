import AdminCategory from './AdminCategory';
import AdminTable from './AdminTable';
import {
  useGetUserListApi,
  useDeleteUserByIdApi,
} from '../../hooks/useUserApi';

import './admin.css';

const AdminMain = () => {
  const { data: userList } = useGetUserListApi();

  const { mutate } = useDeleteUserByIdApi();

  const deleteUserIdFind = (id: string) => {
    mutate(id); // useDeleteUserByIdApi에 delete user id 전달
  };

  let theadTitle: string[] = ['No', '닉네임', '이메일', '관리'];

  return (
    <>
      <section className="admin_area">
        <AdminCategory />

        {userList && (
          <AdminTable
            pageTitle={'사용자 관리'}
            theadTitle={theadTitle}
            data={userList}
            deleteEvent={(id: string) => deleteUserIdFind(id)}
          />
        )}
      </section>
    </>
  );
};

export default AdminMain;
