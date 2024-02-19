import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "./queryKeys";
import { categoryService } from "../services/api";

export const useFetchCategories = () => {
  return useQuery({
    queryKey: [queryKeys.FETCH_CATEGORIES],
    queryFn: () => {
      return categoryService.fetchCategories();
    },
  });
};
