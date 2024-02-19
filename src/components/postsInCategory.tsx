import { MdOutlineOpenInNew as OpenIcon } from "react-icons/md";
import { CardPrimary } from "./cards";
import { CategoryTypeEnum, SinglePostType } from "../types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getPreferredLanguage } from "../lib";

type PostsInTypeProps = {
  id: number;
  name_uz: string | null;
  name_en: string | null;
  name_krill: string | null;
  name_ru: string | null;
  type: CategoryTypeEnum;
  Post: SinglePostType[];
};

const PostsInCategory = ({
  dataWithCategory,
}: {
  dataWithCategory: PostsInTypeProps;
}) => {
  const { t } = useTranslation();

  return (
    <div className="rounded-lg shadow-lg dark:bg-[#10205B] p-6 shadow-lg flex flex-col gap-4 max-md:w-full max-h-full">
      <div className="flex justify-between text-primary dark:text-white">
        <h1 className="py-1 text-xl rounded-[5px] font-semibold max-md:text-base">
          {getPreferredLanguage(
            dataWithCategory.name_uz,
            dataWithCategory.name_en,
            dataWithCategory.name_ru,
            dataWithCategory.name_krill
          )}
        </h1>

        <Link
          to={`/category/${dataWithCategory.id}`}
          className="flex gap-1 items-center cursor-pointer"
        >
          <h1 className="max-md:text-xs">{t("explore_all")}</h1>
          <OpenIcon className="text-xl" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 max-md:grid-cols-1">
        {dataWithCategory.Post.map((posts) => (
          <CardPrimary key={posts.id} data={posts} titleLength={100} />
        ))}
      </div>
    </div>
  );
};

export default PostsInCategory;
