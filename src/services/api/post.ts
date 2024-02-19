import { PostFilterQueriesType } from "../../types";
import { api } from "../configs";

class Post {
  async fetchPostsCombined() {
    return await api.get(`/post-filter/combined`);
  }

  async fetchPostsByQueries(query: PostFilterQueriesType) {
    let {
      page = 1,
      limit = 10,
      categoryId = 0,
      keyword = "",
      orderBy,
      categoryLabel_en,
      categoryLabel_krill,
      categoryLabel_ru,
      categoryLabel_uz,
    } = query;

    return await api.get(
      `/post-filter/query?page=${page}&limit=${limit}&categoryId=${categoryId}&keyword=${keyword}&orderBy=${orderBy}&categoryLabel_uz=${categoryLabel_uz}&categoryLabel_en=${categoryLabel_en}&categoryLabel_krill=${categoryLabel_krill}&categoryLabel_ru=${categoryLabel_ru}`
    );
  }

  async getSinglePost(postId: number) {
    return await api.get(`/post/${postId}?action=USER`);
  }
}

export const postService = new Post();
