import { useState } from 'react';
import AdminCategory from './AdminCategory';
import AdminTable from './AdminTable';
import {
  useGetRecipeListApi,
  useDeleteRecipeByIdApi,
  useDeleteRecipeByCheckApi,
} from '../../hooks/useRecipeApi';

import './admin.css';
import Pagination from '../../components/Pagination';

const AdminRecipe = () => {
  const { data: recipeList } = useGetRecipeListApi();
  const { mutate: deleteMutate } = useDeleteRecipeByIdApi();
  const { mutate: deleteList } = useDeleteRecipeByCheckApi();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const deleteRecipeIdFind = (id: string) => {
    deleteMutate(id);
  };

  const deleteRecipeCheckList = (idList: string[]) => {
    deleteList(idList);
  };

  const theadTitle: string[] = ['닉네임', '제목', '관리'];

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    recipeList?.slice(indexOfFirstItem, indexOfLastItem) || [];

  return (
    <section className="admin_area">
      <AdminCategory />

      {currentItems && (
        <AdminTable
          pageTitle={'레시피 관리'}
          theadTitle={theadTitle}
          data={currentItems}
          deleteEvent={(id: string) => deleteRecipeIdFind(id)}
          deleteList={(idList: string[]) => deleteRecipeCheckList(idList)}
        />
      )}
      <div style={{ margin: '20px 0 0', paddingBottom: '6rem' }}>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(
            recipeList && recipeList.length
              ? recipeList.length / itemsPerPage
              : 1
          )}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default AdminRecipe;
