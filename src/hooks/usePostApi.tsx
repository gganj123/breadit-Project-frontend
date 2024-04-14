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

export const useGetPostByQueryApi = ({
  query,
  key,
}: {
  query: string;
  key: string;
}) => {
  return useQuery({
    queryKey: ['posts', query, key],
    queryFn: () => repositories.postsApis.getPostQuery(query, key),
  });
};

export const useGetPostByIdApi = (targetId: string) => {
  return useQuery({
    queryKey: ['post', targetId],
    queryFn: () => repositories.postsApis.getPost(targetId),
    enabled: true,
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
      queryClient.invalidateQueries({ queryKey: ['post'] });
    },
  });
};
