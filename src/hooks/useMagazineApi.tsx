import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { repositories } from '../apis';

type MagazineParameters = {
  _id: string;
  nickname: string;
  title: string;
  content: string;
};

export const useGetMagazineListApi = () => {
  return useQuery<MagazineParameters[]>({
    queryKey: ['magazines'],
    queryFn: repositories.magazinesApis.getMagazineList,
    enabled: false,
  });
};

export const useGetMagazineByIdApi = (targetId: string) => {
  return useQuery({
    queryKey: ['magazines', targetId],
    queryFn: () => repositories.magazinesApis.getMagazine(targetId),
    enabled: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useDeleteMagazineByIdApi = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (targetId: string) =>
      repositories.magazinesApis.deleteMagazine(targetId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['magazines'] });
    },
  });
};
