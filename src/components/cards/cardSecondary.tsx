import { IoEyeOutline as ViewsIcon } from "react-icons/io5";
import { Link } from "react-router-dom";
import { SinglePostType } from "../../types";
import { dateFormatter, getPreferredLanguage } from "../../lib";

type CardSecondaryProps = {
  data: {
    category_uz: string | null;
    category_en: string | null;
    category_krill: string | null;
    category_ru: string | null;
    posts: SinglePostType;
  };
};

const CardSecondary = ({ data }: CardSecondaryProps) => {
  return (
    <Link
      to={`/post/${data?.posts?.id}`}
      className="flex flex-col gap-1 bg-white dark:bg-[#10205B] rounded-lg shadow-lg"
    >
      <div
        className="rounded-t-lg h-[170px] bg-cover"
        style={{ backgroundImage: `url(${data.posts?.cover_image})` }}
      >
        <div className="flex justify-start m-3">
          <h1 className="bg-primary bg-opacity-80 text-white px-2 py-[2px] rounded-md text-sm border-none">
            {getPreferredLanguage(
              data?.category_uz,
              data?.category_en,
              data?.category_ru,
              data?.category_krill
            )}
          </h1>
        </div>
      </div>

      <div className="text-black dark:text-white px-4 py-5 flex flex-col gap-2">
        <h1 className="font-semibold text-base">
          {getPreferredLanguage(
            data.posts?.title_uz,
            data.posts?.title_en,
            data.posts?.title_ru,
            data.posts?.title_krill
          )}
        </h1>

        <div className="flex justify-between text-sm opacity-50 mt-1">
          <h1>{dateFormatter(data.posts?.createdAt)}</h1>
          <div className="flex gap-1 items-center">
            <ViewsIcon className="text-base mt-[2px]" />
            <span>{data.posts?.views || 0}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardSecondary;
