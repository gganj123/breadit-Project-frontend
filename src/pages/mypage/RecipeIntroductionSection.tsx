import { useEffect, useState } from 'react';
import { useGetRecipeByUserIdApi } from '../../hooks/useRecipeApi';
import BigCard, { BigCardProps } from '../../components/BigCard/BigCard';
import { useAuth } from '../login/AuthContext';
import {
  ContextWrap,
  LoaderWrapper,
  MypageList,
  MypageListTitle,
  ListWrapper,
} from './MyPage';
import { TailSpin } from 'react-loader-spinner';

export default function BakeryIntroductionSection() {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  const { data: recipeUserList, refetch: recipeRefetch } =
    useGetRecipeByUserIdApi(user?._id);

  useEffect(() => {
    if (user) {
      recipeRefetch();
      setIsLoading(false);
    }
  }, [user, recipeRefetch]);

  return (
    <>
      <ContextWrap>
        <MypageList>
          <MypageListTitle>
            <h2 className="oleo-script-bold community_title">
              나만의 레시피를 공유해요
            </h2>
          </MypageListTitle>
          <ListWrapper>
            {/* 데이터가 로딩 중이면 로딩 바를 표시 */}
            {isLoading && (
              <LoaderWrapper>
                <TailSpin color="#FFCB46" />
              </LoaderWrapper>
            )}
            {/* 데이터가 있는지 확인하고 mainphotourl이 있는지 확인합니다 */}
            {!isLoading &&
              recipeUserList &&
              recipeUserList.map((recipe: BigCardProps['data']) => {
                return (
                  <BigCard
                    key={recipe._id}
                    data={recipe}
                    go={'recipes'}
                    userInfo={false}
                  />
                );
              })}
          </ListWrapper>
        </MypageList>
      </ContextWrap>
    </>
  );
}
