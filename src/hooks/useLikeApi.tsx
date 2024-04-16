import { useMutation, useQueryClient } from '@tanstack/react-query';
import { repositories } from '../apis';

export const usePostMagazineLikeToggleApi = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, postId }: { userId: string; postId: string }) =>
      repositories.likesApis.postMagazineLikeToggle(userId, postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['magazine'] });
    },
  });
};

export const usePostPostLikeToggleApi = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, postId }: { userId: string; postId: string }) =>
      repositories.likesApis.postPostLikeToggle(userId, postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['post'] });
    },
  });
};

export const usePostRecipeLikeToggleApi = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, postId }: { userId: string; postId: string }) =>
      repositories.likesApis.postRecipeLikeToggle(userId, postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recipe'] });
    },
  });
};
