import { IoEyeOutline as ViewsIcon } from "react-icons/io5";
import { SinglePostType } from "../../types";
import { Link } from "react-router-dom";
import { dateFormatter, getPreferredLanguage } from "../../lib";

const CardList = ({ data }: { data: SinglePostType }) => {
  return (
    <Link
      to={`/post/${data.id}`}
      className="flex flex-col gap-2 pb-3 border-black dark:border-white border-b border-opacity-20 dark:border-opacity-40"
    >
      <h1 className="text-sm font-semibold max-xl:text-base max-md:text-sm">
        {getPreferredLanguage(
          data.title_uz,
          data.title_en,
          data.title_ru,
          data.title_krill
        )}
      </h1>

      <div className="flex gap-2 opacity-50 text-xs">
        <span>{dateFormatter(data?.createdAt)}</span>
        <div className="flex gap-1 items-center">
          <ViewsIcon className="text-base mt-[2px]" />
          <span>{data.views || 0}</span>
        </div>
      </div>
    </Link>
  );
};

export default CardList;
