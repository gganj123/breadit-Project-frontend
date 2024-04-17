import { useState } from 'react';
import AdminCategory from './AdminCategory';
import AdminTable from './AdminTable';
import {
  useGetPostListApi,
  useDeletePostByIdApi,
  useDeletePostByCheckApi,
} from '../../hooks/usePostApi';

import './admin.css';
import Pagination from '../../components/Pagination';

const AdminPost = () => {
  const { data: postList } = useGetPostListApi();
  const { mutate: deleteMutate } = useDeletePostByIdApi();
  const { mutate: deleteList } = useDeletePostByCheckApi();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const deletePostIdFind = (id: string) => {
    deleteMutate(id);
  };

  const deletePostCheckList = (idList: string[]) => {
    deleteList(idList);
  };

  const theadTitle: string[] = ['닉네임', '제목', '관리'];

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = postList?.slice(indexOfFirstItem, indexOfLastItem) || [];

  return (
    <>
      <section className="admin_area">
        <AdminCategory />

        {currentItems && (
          <AdminTable
            pageTitle={'추천글 관리'}
            theadTitle={theadTitle}
            data={currentItems}
            deleteEvent={(id: string) => deletePostIdFind(id)}
            deleteList={(idList: string[]) => deletePostCheckList(idList)}
            go={'/community/nearby'}
          />
        )}
        <div style={{ margin: '20px 0 0', paddingBottom: '6rem' }}>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(
              postList && postList.length ? postList.length / itemsPerPage : 1
            )}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </>
  );
};

export default AdminPost;
