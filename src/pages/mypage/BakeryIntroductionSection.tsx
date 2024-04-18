import { useEffect, useState } from 'react';
import { useGetPostByUserIdQueryApi } from '../../hooks/usePostApi';
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
  const { data: postUserList, refetch: postRefetch } =
    useGetPostByUserIdQueryApi({
      userId: user?._id,
      query: '',
    });

  useEffect(() => {
    if (user) {
      postRefetch();
      setIsLoading(false);
    }
  }, [user, postRefetch]);

  return (
    <>
      <ContextWrap>
        <MypageList>
          <MypageListTitle>
            <h2 className="oleo-script-bold community_title">
              우리 동네 베이커리를 소개합니다!
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
              postUserList &&
              postUserList.map((post: BigCardProps['data']) => {
                return (
                  <BigCard
                    key={post._id}
                    data={post}
                    go={'posts'}
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
