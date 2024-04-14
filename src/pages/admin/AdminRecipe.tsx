import AdminCategory from './AdminCategory';
import AdminTable from './AdminTable';
import {
  useGetRecipeListApi,
  useDeleteRecipeByIdApi,
  useDeleteRecipeByCheckApi,
} from '../../hooks/useRecipeApi';

import './admin.css';

const AdminMain = () => {
  const { data: recipeList } = useGetRecipeListApi();
  const { mutate: deleteMutate } = useDeleteRecipeByIdApi();
  const { mutate: deleteList } = useDeleteRecipeByCheckApi();

  const deleteRecipeIdFind = (id: string) => {
    deleteMutate(id);
  };

  const deleteRecipeCheckList = (idList: string[]) => {
    deleteList(idList);
  };

  let theadTitle: string[] = ['No', '닉네임', '제목', '관리'];

  return (
    <section className="admin_area">
      <AdminCategory />

      {recipeList && (
        <AdminTable
          pageTitle={'레시피 관리'}
          theadTitle={theadTitle}
          data={recipeList}
          deleteEvent={(id: string) => deleteRecipeIdFind(id)}
          deleteList={(idList: string[]) => deleteRecipeCheckList(idList)}
        />
      )}
    </section>
  );
};

export default AdminMain;
