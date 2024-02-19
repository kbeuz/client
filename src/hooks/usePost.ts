import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "./queryKeys";
import { PostFilterQueriesType } from "../types";
import { postService } from "../services/api";

export const useFetchPostsCombined = () => {
  return useQuery({
    queryKey: [queryKeys.FETCH_POSTS_COMBINED],
    queryFn: () => {
      return postService.fetchPostsCombined();
    },
    refetchOnWindowFocus: false,
  });
};

export const useFetchPostsByQueries = (query: PostFilterQueriesType) => {
  return useQuery({
    queryKey: [queryKeys.FETCH_POSTS_BY_QUERY],
    queryFn: () => {
      return postService.fetchPostsByQueries(query);
    },
    refetchOnWindowFocus: false,
  });
};

export const useGetSinglePost = (postId: number) => {
  return useQuery({
    queryKey: [queryKeys.GET_SINGLE_POST],
    queryFn: () => {
      return postService.getSinglePost(postId);
    },
    refetchOnWindowFocus: false,
  });
};
