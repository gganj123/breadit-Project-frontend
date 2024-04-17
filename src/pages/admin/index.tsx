import { useState } from 'react';
import AdminCategory from './AdminCategory';
import AdminTable from './AdminTable';
import {
  useGetUserListApi,
  useDeleteUserByIdApi,
} from '../../hooks/useUserApi';

import './admin.css';
import Pagination from '../../components/Pagination';

const AdminMain = () => {
  const { data: userList } = useGetUserListApi();

  const { mutate } = useDeleteUserByIdApi();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const deleteUserIdFind = (id: string) => {
    mutate(id); // useDeleteUserByIdApi에 delete user id 전달
  };

  const theadTitle: string[] = ['닉네임', '이메일', '관리'];

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userList?.slice(indexOfFirstItem, indexOfLastItem) || [];

  return (
    <>
      <section className="admin_area">
        <AdminCategory />

        {currentItems && (
          <AdminTable
            pageTitle={'사용자 관리'}
            theadTitle={theadTitle}
            data={currentItems}
            deleteEvent={(id: string) => deleteUserIdFind(id)}
          />
        )}
        <div style={{ margin: '20px 0 0', paddingBottom: '6rem' }}>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(
              userList && userList.length ? userList.length / itemsPerPage : 1
            )}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </>
  );
};

export default AdminMain;
