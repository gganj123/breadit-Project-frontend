import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { repositories } from '../apis';

type MagazineParameters = {
  _id: string;
  nickname: string;
  title: string;
  content: string;
  like_count: number;
};

export const useGetMagazineListApi = () => {
  return useQuery<MagazineParameters[]>({
    queryKey: ['magazines'],
    queryFn: repositories.magazinesApis.getMagazineList,
    enabled: true,
  });
};

export const useGetMagazineByQueryApi = ({
  query,
  key,
}: {
  query: string;
  key: string;
}) => {
  return useQuery({
    queryKey: ['magazines', query, key],
    queryFn: () => repositories.magazinesApis.getMagazineQuery(query, key),
  });
};

export const useGetMagazineByIdApi = ({
  targetId,
  accessToken,
}: {
  targetId: string;
  accessToken: string;
}) => {
  return useQuery({
    queryKey: ['magazine', targetId],
    queryFn: () =>
      repositories.magazinesApis.getMagazine(targetId, accessToken),
    enabled: !!targetId,
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
      queryClient.invalidateQueries({ queryKey: ['magazine'] });
    },
  });
};
