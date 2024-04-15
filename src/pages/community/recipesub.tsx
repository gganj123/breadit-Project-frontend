import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import DetailContent from '../../components/Detail/Detail';
import ToggleSaveButton from '../../components/atoms/buttons/ToggleSaveButton';
import CopyUrlButton from '../../components/atoms/buttons/CopyUrlButton';
import {
  useGetRecipeByIdApi,
  useDeleteRecipeByIdApi,
} from '../../hooks/useRecipeApi';

const RecipeDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: RecipeDetail } = useGetRecipeByIdApi(id as string);

  const { mutate: deleteMutate } = useDeleteRecipeByIdApi();
  const deleteRecipeId = (id: string) => {
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
          RecipeDetail !== undefined
            ? RecipeDetail
            : {
                _id: '',
                nickname: '',
                profile: '',
                createdAt: '',
                title: '',
                content: '',
              }
        }
        deleteEvent={(id: string) => deleteRecipeId(id)}
      />
    </section>
  );
};

export default RecipeDetailPage;
