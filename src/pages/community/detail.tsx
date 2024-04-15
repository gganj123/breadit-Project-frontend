import { useEffect } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import DetailContent from '../../components/Detail/Detail';
import ToggleSaveButton from '../../components/atoms/buttons/ToggleSaveButton';
import CopyUrlButton from '../../components/atoms/buttons/CopyUrlButton';
import {
  useGetPostByIdApi,
  useDeletePostByIdApi,
} from '../../hooks/usePostApi';
import {
  useGetRecipeByIdApi,
  useDeleteRecipeByIdApi,
} from '../../hooks/useRecipeApi';

const CommunityDetail = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  const accessToken = localStorage.getItem('accessToken');

  let postDetail;

  if (location.pathname.includes('nearby')) {
    let { data } = useGetPostByIdApi({
      targetId: id,
      accessToken,
    });

    postDetail = data;
  } else if (location.pathname.includes('recipe')) {
    let { data } = useGetRecipeByIdApi({
      targetId: id,
      accessToken,
    });
    postDetail = data;
  }

  console.log(location.pathname);

  const { mutate: deleteMutate } = useDeletePostByIdApi();

  const deletePostId = (id: string) => {
    deleteMutate(id);
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
          {postDetail && (
            <ToggleSaveButton bookmarkState={postDetail.beBookmark} />
          )}
          <CopyUrlButton />
        </div>
      </div>
      <DetailContent
        data={
          postDetail !== undefined
            ? postDetail
            : {
                _id: '',
                nickname: '',
                profile: '',
                createdAt: '',
                title: '',
                content: '',
                like_count: '',
                beLike: false,
              }
        }
        deleteEvent={(id: string) => deletePostId(id)}
      />
    </section>
  );
};

export default CommunityDetail;
