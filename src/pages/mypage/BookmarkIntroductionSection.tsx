import { useEffect, useState } from 'react';
import { useGetBookmarkByUserIdApi } from '../../hooks/useBookmarkApi';
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
  const { data: bookmarkList, refetch: bookmarkRefetch } =
    useGetBookmarkByUserIdApi({
      userId: user?._id,
      query: '?limit=3',
    });

  useEffect(() => {
    if (user) {
      bookmarkRefetch();
      setIsLoading(false);
    }
  }, [user, bookmarkRefetch]);

  return (
    <>
      <ContextWrap>
        <MypageList>
          <MypageListTitle>
            <h2 className="oleo-script-bold community_title">저장한 게시글</h2>
          </MypageListTitle>
          <ListWrapper>
            {isLoading && (
              <LoaderWrapper>
                <TailSpin color="#FFCB46" />
              </LoaderWrapper>
            )}
            {!isLoading &&
              bookmarkList &&
              bookmarkList.map((bookmark: BigCardProps['data']) => {
                return (
                  <BigCard
                    key={bookmark._id}
                    data={bookmark}
                    go={bookmark.location}
                    userInfo={true}
                  />
                );
              })}
          </ListWrapper>
        </MypageList>
      </ContextWrap>
    </>
  );
}
