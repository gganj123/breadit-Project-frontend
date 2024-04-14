import AdminCategory from './AdminCategory';
import AdminTable from './AdminTable';
import { useGetPostListApi } from '../../hooks/usePostApi';

import './admin.css';

const AdminMain = () => {
  const { data: communityList } = useGetPostListApi();

  let theadTitle: string[] = ['No', '닉네임', '제목', '관리'];

  return (
    <>
      <section className="admin_area">
        <AdminCategory />

        {communityList && (
          <AdminTable
            pageTitle={'추천글 관리'}
            theadTitle={theadTitle}
            data={communityList}
          />
        )}
      </section>
    </>
  );
};

export default AdminMain;
