import { CategoryTypeEnum } from "./category";

export type PostProps = {
  post: SinglePostType;
  related: SinglePostType[];
  recommended: SinglePostType[];
};

export type SinglePostType = {
  id?: number;
  adminId?: number;
  categoryId?: number;
  title_uz?: string;
  title_en?: string | null;
  title_ru?: string | null;
  title_krill?: string | null;
  descr_uz?: string;
  descr_en?: string | null;
  descr_ru?: string | null;
  descr_krill?: string | null;
  cover_image?: string | null;
  views?: number;
  isActive?: boolean;
  isPinned?: boolean;
  createdAt?: string;
  updatedAt?: string;
  category?: {
    name_uz: string | null;
    name_en: string | null;
    name_krill: string | null;
    name_ru: string | null;
  };
};

export type PostsCombinedType = {
  pinned: SinglePostType[];
  oneInCategories: {
    category_uz: string | null;
    category_en: string | null;
    category_krill: string | null;
    category_ru: string | null;
    posts: SinglePostType;
  }[];
  latest: SinglePostType[];
  trendings: SinglePostType[];
  videoPosts: SinglePostType[];
  categories: {
    id: number;
    name_uz: string | null;
    name_en: string | null;
    name_krill: string | null;
    name_ru: string | null;
    type: CategoryTypeEnum;
    Post: SinglePostType[];
  }[];
};

export type PostsByQueryType = {
  meta: {
    currentPage: number;
    limit: number;
    total_pages: number;
    totalPostsList: number;
    category: {
      type?: CategoryTypeEnum;
      name_en: string | null;
      name_uz: string | null;
      name_krill: string | null;
      name_ru: string | null;
    };
  };
  post: SinglePostType[];
};
