import { useLocation, Link, useParams } from 'react-router-dom';
import DetailContent from '../../components/Detail/Detail';
import ToggleSaveButton from '../../components/atoms/buttons/ToggleSaveButton';
import CopyUrlButton from '../../components/atoms/buttons/CopyUrlButton';
import {
  useGetRecipeByIdApi,
  useDeleteRecipeByIdApi,
} from '../../hooks/useRecipeApi';
import { usePostRecipeBookmarkToggleApi } from '../../hooks/useBookmarkApi';

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  const accessToken = localStorage.getItem('accessToken');

  let { data: recipeDetail } = useGetRecipeByIdApi({
    targetId: id,
    accessToken,
  });

  const { mutate: deleteMutate } = useDeleteRecipeByIdApi();

  const deletePostId = (id: string) => {
    deleteMutate(id);
  };

  const { mutate: recipeBookmarkMutate } = usePostRecipeBookmarkToggleApi();

  const userId = localStorage.getItem('id');

  const saveToggle = () => {
    userId && id && recipeBookmarkMutate({ userId, postId: id });
  };

  return (
    <section className="detail">
      <div className="flex_default detail_top">
        <ul className="location">
          <li>
            <Link to="/community">커뮤니티</Link>
          </li>
          <li>
            <Link to="/community/recipe">레시피 소개</Link>
          </li>
        </ul>
        <div className="buttons">
          {recipeDetail && (
            <ToggleSaveButton
              bookmarkState={recipeDetail.beBookmark}
              bookmarkEvent={() => saveToggle()}
            />
          )}
          <CopyUrlButton />
        </div>
      </div>
      <DetailContent
        data={
          recipeDetail !== undefined
            ? recipeDetail
            : {
                _id: '',
                user_id: '',
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

export default RecipeDetail;
