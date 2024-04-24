import { IoEyeOutline as ViewsIcon } from "react-icons/io5";
import { Link } from "react-router-dom";
import { SinglePostType } from "../../types";
import { dateFormatter, getPreferredLanguage, wordSlicer } from "../../lib";

const CardPrimary = ({
  data,
  titleLength = 100,
}: {
  size?: "sm" | "base";
  data: SinglePostType;
  titleLength?: number;
}) => {
  return (
    <Link to={`/post/${data?.id}`} className="flex gap-4 max-md:flex-col">
      <img src={data?.cover_image} className={`rounded-lg max-h-48 bg-cover`} />

      <div className="flex flex-col gap-1 justify-center max-md:gap-2 xl:w-[400px] md:max-w-[400px]">
        <h1 className={`text-base dark:text-white font-medium break-normal`}>
          {wordSlicer(
            getPreferredLanguage(
              data?.title_uz,
              data?.title_en,
              data?.title_ru,
              data?.title_krill
            ),
            titleLength,
            titleLength
          )}
        </h1>

        <div className="flex items-center gap-3 text-sm opacity-50 mt-1 max-md:text-sm">
          <h1>{dateFormatter(data?.createdAt)}</h1>
          <div className="flex gap-1 items-center">
            <ViewsIcon className="text-base mt-[2px]" />
            <span>{data?.views || 0}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardPrimary;
