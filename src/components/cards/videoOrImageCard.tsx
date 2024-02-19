import { FaPlay as VideoPlayIcon } from "react-icons/fa6";
import { IoEyeOutline as ViewsIcon } from "react-icons/io5";
import { SinglePostType } from "../../types";
import { Link } from "react-router-dom";
import { dateFormatter, getPreferredLanguage } from "../../lib";

const VideoOrImagePostCard = ({
  isPrimary = false,
  cardType = "VIDEO",
  hiddenOnMobile = false,
  data,
}: {
  isPrimary?: boolean;
  hiddenOnMobile?: boolean;
  cardType?: "IMAGE" | "VIDEO";
  data: SinglePostType;
}) => {
  return (
    <Link
      to={`/post/${data?.id}`}
      style={{ backgroundImage: `url(${data?.cover_image})` }}
      className={`bg-cover bg-center flex flex-col justify-between rounded-lg shadow-lg ${
        isPrimary ? "h-[380px] max-md:h-[300px]" : "h-[180px]"
      } ${hiddenOnMobile && "max-md:hidden"}`}
    >
      <div
        className={`flex justify-center items-center h-full relative ${
          isPrimary ? "top-11" : "top-8"
        }`}
      >
        <div
          className={`backdrop-blur-md rounded-full bg-white bg-opacity-10 ${
            isPrimary ? "p-5 max-md:p-4" : "p-3"
          } ${cardType === "IMAGE" && "hidden"}`}
        >
          <VideoPlayIcon
            className={`${isPrimary ? "text-xl" : "text-sm"} text-white`}
          />
        </div>
      </div>

      <div
        className={`bg-black bg-opacity-50 flex flex-col rounded-b-lg  ${
          isPrimary ? "p-4 gap-[2px]" : "px-3 py-2 gap-0"
        }`}
      >
        <h1
          className={`font-medium text-white ${
            isPrimary
              ? "text-2xl w-[90%] max-md:text-xl"
              : "text-base w-full break-all"
          }`}
        >
          {getPreferredLanguage(
            data?.title_uz,
            data?.title_en,
            data?.title_ru,
            data?.title_krill
          )}
        </h1>

        <div className="flex gap-3 text-sm text-gray-200 opacity-80  dark:text-white dark:opacity-50 mt-1">
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

export default VideoOrImagePostCard;
