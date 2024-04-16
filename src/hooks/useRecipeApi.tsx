import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { repositories } from '../apis';

type RecipeParameters = {
  _id: string;
  nickname: string;
  title: string;
  content: string;
  like_count: number;
};

export const useGetRecipeListApi = () => {
  return useQuery<RecipeParameters[]>({
    queryKey: ['recipes'],
    queryFn: repositories.recipesApis.getRecipeList,
    enabled: true,
  });
};

export const useGetRecipeByQueryApi = (query: string) => {
  return useQuery({
    queryKey: ['recipes', query],
    queryFn: () => repositories.recipesApis.getRecipeQuery(query),
  });
};

export const useGetRecipeByIdApi = ({
  targetId = '',
  accessToken,
}: {
  targetId?: string;
  accessToken: string | null;
}) => {
  return useQuery({
    queryKey: ['recipe', targetId, accessToken],
    queryFn: () => repositories.recipesApis.getRecipe(targetId, accessToken),
    enabled: !!targetId,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useDeleteRecipeByIdApi = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (targetId: string) =>
      repositories.recipesApis.deleteRecipe(targetId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recipes'] });
    },
  });
};

export const useDeleteRecipeByCheckApi = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (targetIdList: string[]) =>
      repositories.recipesApis.deleteRecipeByCheck(targetIdList),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recipes'] });
    },
  });
};
