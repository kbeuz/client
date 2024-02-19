export enum CategoryTypeEnum {
  TEXT = "TEXT",
  VIDEO = "VIDEO",
  ADVERTISEMENT = "ADVERTISEMENT",
}

export type SingleCategoryType = {
  id: number;
  adminId: number;
  name_uz: string;
  name_en: string | null;
  name_ru: string | null;
  name_krill: string | null;
  type: CategoryTypeEnum;
  createdAt: string;
  updatedAt: string;
};
