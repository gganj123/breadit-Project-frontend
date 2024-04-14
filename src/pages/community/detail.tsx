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

const CommunityDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: CommunityDetail } = useGetPostByIdApi(id as string);
  console.log(CommunityDetail);

  const { mutate: deleteMutate } = useDeletePostByIdApi();
  const deletePostId = (id: string) => {
    deleteMutate(id);
  };

  return (
    <section className="detail">
      <div className="flex_default detail_top">
        <ul className="location">
          <li>
            <Link to="/magazines">커뮤니티</Link>
          </li>
        </ul>
        <div className="buttons">
          <ToggleSaveButton />
          <CopyUrlButton />
        </div>
      </div>
      <DetailContent
        data={
          CommunityDetail !== undefined
            ? CommunityDetail
            : {
                _id: '',
                nickname: '',
                profile: '',
                createdAt: '',
                title: '',
                content: '',
              }
        }
        deleteEvent={(id: string) => deletePostId(id)}
      />
    </section>
  );
};

export default CommunityDetail;
