import { useQuery } from '@tanstack/react-query';
import { repositories } from '../apis';

type MagazineParameters = {
  _id: string;
  nickname: string;
  title: string;
  content: string;
  // 다른 필드들도 필요에 따라 추가
};

export const useMagazinesApi = () => {
  const getMagazineListQuery = useQuery<MagazineParameters>({
    queryKey: ['magazines'],
    queryFn: repositories.magazinesApis.getMagazineList,
    enabled: true,
  });

  return {
    getMagazineListQuery,
  };
};
