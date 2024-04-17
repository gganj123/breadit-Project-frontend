import { useMutation, useQueryClient } from '@tanstack/react-query';
import { repositories } from '../apis';

export const usePostMagazineBookmarkToggleApi = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, postId }: { userId: string; postId: string }) =>
      repositories.bookmarksApis.postMagazineBookmarkToggle(userId, postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['magazine'] });
    },
  });
};

export const usePostPostBookmarkToggleApi = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, postId }: { userId: string; postId: string }) =>
      repositories.bookmarksApis.postPostBookmarkToggle(userId, postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['post'] });
    },
  });
};

export const usePostRecipeBookmarkToggleApi = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, postId }: { userId: string; postId: string }) =>
      repositories.bookmarksApis.postRecipeBookmarkToggle(userId, postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recipe'] });
    },
  });
};
