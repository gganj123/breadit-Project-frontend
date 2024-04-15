import AdminCategory from './AdminCategory';
import AdminTable from './AdminTable';
import {
  useGetPostListApi,
  useDeletePostByIdApi,
  useDeletePostByCheckApi,
} from '../../hooks/usePostApi';

import './admin.css';

const AdminPost = () => {
  const { data: postList } = useGetPostListApi();
  const { mutate: deleteMutate } = useDeletePostByIdApi();
  const { mutate: deleteList } = useDeletePostByCheckApi();

  const deletePostIdFind = (id: string) => {
    deleteMutate(id);
  };

  const deletePostCheckList = (idList: string[]) => {
    deleteList(idList);
  };

  let theadTitle: string[] = ['No', '닉네임', '제목', '관리'];

  return (
    <>
      <section className="admin_area">
        <AdminCategory />

        {postList && (
          <AdminTable
            pageTitle={'추천글 관리'}
            theadTitle={theadTitle}
            data={postList}
            deleteEvent={(id: string) => deletePostIdFind(id)}
            deleteList={(idList: string[]) => deletePostCheckList(idList)}
          />
        )}
      </section>
    </>
  );
};

export default AdminPost;
