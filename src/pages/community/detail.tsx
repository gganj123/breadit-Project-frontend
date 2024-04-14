import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import DetailContent from '../../components/Detail';
import ToggleSaveButton from '../../components/atoms/buttons/ToggleSaveButton';
import CopyUrlButton from '../../components/atoms/buttons/CopyUrlButton';
import {
  useGetPostByIdApi,
  useDeletePostByIdApi,
} from '../../hooks/usePostApi';

const MagazineDetail = () => {
  const { id } = useParams<{ id?: string }>();
  const getPostQuery = useGetPostByIdApi(id || '');

  useEffect(() => {
    getPostQuery.refetch();
  }, [getPostQuery.data]);

  const detailData = getPostQuery.data || {
    _id: '',
    nickname: '',
    profile: '',
    createdAt: '',
    title: '',
    content: '',
    beLike: false,
  };

  const { mutate } = useDeletePostByIdApi();

  const deletePostId = (id: string) => {
    mutate(id);
  };

  return (
    <section className="detail">
      <div className="flex_default detail_top">
        <ul className="location">
          <li>
            <Link to="/community">커뮤니티</Link>
          </li>
          <li>
            <Link to="/community/nearby">베이커리 소개</Link>
          </li>
        </ul>
        <div className="buttons">
          <ToggleSaveButton />
          <CopyUrlButton />
        </div>
      </div>
      <DetailContent
        data={detailData}
        deleteEvent={(id: string) => deletePostId(id)}
      />
    </section>
  );
};

export default MagazineDetail;
