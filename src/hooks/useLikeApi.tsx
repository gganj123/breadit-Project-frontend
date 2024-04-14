import { useMutation, useQueryClient } from '@tanstack/react-query';
import { repositories } from '../apis';

export const useMagazineLikeStateApi = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ targetId, userId }: { targetId: string; userId: string }) =>
      repositories.likesApis.magazineLikeState(targetId, userId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['magazine', data._id] });
    },
  });
};
