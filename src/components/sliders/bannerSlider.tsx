import { MdNavigateNext as ArrowIcon } from "react-icons/md";
import { IoEyeOutline as ViewsIcon } from "react-icons/io5";
import { GoDotFill as DotIcon } from "react-icons/go";
import { SinglePostType } from "../../types";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { dateFormatter, getPreferredLanguage } from "../../lib";

type BannerProps = {
  data: SinglePostType[];
};

const BannerSlider = ({ data }: BannerProps) => {
  const [index, setIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data?.length);
    }, 5000);

    setIntervalId(intervalId);

    return () => {
      clearInterval(intervalId);
    };
  }, [data?.length]);

  const handleNext = () => {
    clearInterval(intervalId);
    setIndex((prevIndex) => (prevIndex + 1) % data?.length);
  };

  const handleBack = () => {
    clearInterval(intervalId);
    setIndex((prevIndex) => (prevIndex - 1 + data?.length) % data?.length);
  };

  return (
    <>
      {data?.map((post, postIndex) => (
        <div
          key={postIndex}
          className={`shadow-lg h-[400px] w-full max-md:w-full max-md:h-[220px] max-lg:w-full max-lg:h-[350px] bg-cover bg-center relative rounded-lg ${
            index === postIndex ? "block" : "hidden"
          }`}
          style={{
            backgroundImage: `url(${post?.cover_image})`,
          }}
        >
          <div className="flex flex-col justify-between h-full ">
            {/* Next and Back buttons */}
            <div className="flex justify-end mt-5 mr-5">
              <div className="flex gap-2 text-[30px] max-md:text-xl text-white cursor-pointer">
                <div className={`bg-gray-500 bg-opacity-20 rounded-full `}>
                  <ArrowIcon className="rotate-180" onClick={handleBack} />
                </div>

                <div className="bg-gray-500 bg-opacity-20 rounded-full">
                  <ArrowIcon onClick={handleNext} />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 max-lg:gap-1 p-4 max-lg:p-2 bg-black rounded-b-lg bg-opacity-30 text-white">
              <Link
                to={`/post/${post.id}`}
                className="text-2xl font-semibold max-md:text-sm"
              >
                {getPreferredLanguage(
                  post.title_uz,
                  post.title_en,
                  post.title_ru,
                  post.title_krill
                )}
              </Link>

              <div className="flex justify-center max-lg:mt-1 -mt-4 -ml-[3px] text-[18px] max-md:text-sm cursor-pointer text-white ">
                {data.map((_, mapIndex) => (
                  <DotIcon
                    key={mapIndex}
                    onClick={() => setIndex(mapIndex)}
                    className={`${index === mapIndex && "text-secondary"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BannerSlider;
