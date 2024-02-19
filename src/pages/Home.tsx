import { Loader, PostsInCategory } from "../components";
import {
  CardList,
  CardPrimary,
  CardSecondary,
  VideoOrImageCard,
} from "../components/cards";
import { BannerSlider } from "../components/sliders";
import { useFetchPostsCombined, useLanguageStore } from "../hooks";
import { MdOutlineOpenInNew as OpenIcon } from "react-icons/md";
import { PostsCombinedType } from "../types";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const fetchpostsCombinedQuery = useFetchPostsCombined();
  const postsList: PostsCombinedType = fetchpostsCombinedQuery?.data?.data;
  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);
  const { t } = useTranslation();

  useEffect(() => {
    fetchpostsCombinedQuery.refetch();
  }, [selectedLanguage]);

  return (
    <div className="pb-10">
      {fetchpostsCombinedQuery.isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-5">
          {/* Banner with 4 posts in different categories */}
          <div className="w-full flex gap-5 pt-5 max-md:flex-col">
            <div className="w-[67%] flex flex-col gap-4 max-md:w-full">
              <BannerSlider data={postsList?.pinned} />
              {postsList.oneInCategories.length >= 4 && (
                <div className="grid grid-cols-2 gap-5 max-md:hidden">
                  <CardSecondary data={postsList.oneInCategories[0]} />
                  <CardSecondary data={postsList.oneInCategories[1]} />
                  <CardSecondary data={postsList.oneInCategories[2]} />
                  <CardSecondary data={postsList.oneInCategories[3]} />
                </div>
              )}
            </div>

            {/* Trendings */}
            {postsList?.trendings.length !== 0 && (
              <div className="w-[33%] rounded-lg dark:bg-[#10205B] p-5 shadow-lg flex flex-col gap-4 max-md:w-full max-h-full">
                <div className="flex">
                  <h1 className="bg-primary text-white dark:text-white px-2 py-1 text-sm rounded-[5px]">
                    {t("trendings")}
                  </h1>
                </div>

                {postsList.trendings.map((posts) => (
                  <CardList key={posts.id} data={posts} />
                ))}
              </div>
            )}
          </div>

          {/* Latest posts */}
          {postsList?.latest?.length !== 0 && (
            <div className="rounded-lg shadow-lg dark:bg-[#10205B] p-6 shadow-lg flex flex-col gap-4 max-md:w-full max-h-full">
              <div className="flex justify-between text-primary dark:text-white">
                <h1 className="py-1 text-xl rounded-[5px] font-semibold max-md:text-base">
                  {t("latest_posts")}
                </h1>

                <Link
                  to={"/latest"}
                  className="flex gap-1 items-center cursor-pointer"
                >
                  <h1 className="max-md:text-xs"> {t("explore_all")}</h1>
                  <OpenIcon className="text-xl" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
                {postsList?.latest?.map((posts) => (
                  <CardPrimary key={posts.id} data={posts} />
                ))}
              </div>
            </div>
          )}

          {/* Video posts */}
          {postsList?.videoPosts.length >= 6 && (
            <div className="rounded-lg shadow-lg dark:bg-[#10205B] p-6 shadow-lg flex flex-col gap-4 max-md:w-full max-h-full">
              <div className="flex justify-between text-primary dark:text-white">
                <h1 className="py-1 text-xl rounded-[5px] font-semibold max-md:text-base">
                  {t("video_posts")}
                </h1>

                <Link
                  to={`/category/${postsList.videoPosts[0]?.categoryId}`}
                  className="flex gap-1 items-center cursor-pointer"
                >
                  <h1 className="max-md:text-xs">{t("explore_all")}</h1>
                  <OpenIcon className="text-xl" />
                </Link>
              </div>

              <div className="w-full flex gap-5 ">
                <div className="w-[70%] flex flex-col gap-5 max-md:w-full">
                  <VideoOrImageCard isPrimary data={postsList.videoPosts[0]} />
                  <div className="grid grid-cols-2 gap-5 max-md:hidden">
                    <VideoOrImageCard data={postsList.videoPosts[1]} />
                    <VideoOrImageCard data={postsList.videoPosts[2]} />
                  </div>
                </div>
                <div className="w-[30%] flex flex-col gap-5 max-md:hidden">
                  <VideoOrImageCard data={postsList.videoPosts[3]} />
                  <VideoOrImageCard data={postsList.videoPosts[4]} />
                  <VideoOrImageCard data={postsList.videoPosts[5]} />
                </div>
              </div>
            </div>
          )}

          {/* posts by categories */}
          <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
            {postsList.categories
              .filter((item) => item.Post.length >= 5 && item.type !== "VIDEO")
              .map((items) => (
                <PostsInCategory key={items.id} dataWithCategory={items} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
