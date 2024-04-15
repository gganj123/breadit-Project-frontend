import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { repositories } from '../apis';

type PostParameters = {
  _id: string;
  nickname: string;
  title: string;
  content: string;
  like_count: number;
};

export const useGetPostListApi = () => {
  return useQuery<PostParameters[]>({
    queryKey: ['posts'],
    queryFn: repositories.postsApis.getPostList,
    enabled: true,
  });
};

export const useGetPostByQueryApi = (query: string) => {
  return useQuery({
    queryKey: ['posts', query],
    queryFn: () => repositories.postsApis.getPostQuery(query),
  });
};

export const useGetPostByIdApi = ({
  targetId = '',
  accessToken,
}: {
  targetId?: string;
  accessToken: string | null;
}) => {
  return useQuery({
    queryKey: ['post', targetId, accessToken],
    queryFn: () => repositories.postsApis.getPost(targetId, accessToken),
    enabled: !!targetId,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useDeletePostByIdApi = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (targetId: string) =>
      repositories.postsApis.deletePost(targetId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
};

export const useDeletePostByCheckApi = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (targetIdList: string[]) =>
      repositories.postsApis.deletePostByCheck(targetIdList),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
};
