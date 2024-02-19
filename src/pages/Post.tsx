import { IoEyeOutline as ViewsIcon } from "react-icons/io5";
import { GoDotFill as DotIcon } from "react-icons/go";
import { GoDash as DashIcon } from "react-icons/go";
import { CardPrimary, VideoOrImageCard } from "../components/cards";
import { MdOutlineOpenInNew as OpenIcon } from "react-icons/md";
import { useGetSinglePost, useLanguageStore } from "../hooks";
import { useParams } from "react-router-dom";
import { PostProps } from "../types";
import { useEffect } from "react";
import { Loader } from "../components";
import { getPreferredLanguage } from "../lib";
import { useTranslation } from "react-i18next";

const Post = () => {
  const { postId } = useParams<{ postId: string }>();
  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);
  const getSinglePostQuery = useGetSinglePost(+postId);
  const { t } = useTranslation();

  const postData: PostProps | undefined = getSinglePostQuery.data?.data;

  const sanitizeHtml = (html: any) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const elements = doc.body.getElementsByTagName("*");
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element["style"].color = "";
    }
    return doc.body.innerHTML;
  };

  useEffect(() => {
    getSinglePostQuery.refetch();
  }, [postId, selectedLanguage, getSinglePostQuery.refetch]);

  return getSinglePostQuery.isLoading ? (
    <Loader />
  ) : (
    <div className="w-full flex flex-col gap-5 mt-5 pb-10">
      <div className="flex justify-between gap-10 max-xl:flex-col">
        {/* post details */}
        <div className="w-[65%] flex flex-col gap-3 max-xl:w-full">
          <h1 className="text-3xl max-lg:text-2xl font-semibold">
            {getPreferredLanguage(
              postData.post.title_uz,
              postData.post.title_en,
              postData.post.title_ru,
              postData.post.title_krill
            )}
          </h1>

          <div className="flex gap-1 items-center">
            <DotIcon className="text-secondary" />
            <h1 className="font-medium max-md:text-sm">
              {getPreferredLanguage(
                postData.post.category.name_uz,
                postData.post.category.name_en,
                postData.post.category.name_ru,
                postData.post.category.name_krill
              )}
            </h1>
            <DashIcon className="mt-1" />

            <div className="flex gap-2 text-sm opacity-50 mt-1">
              <h1>20.03.2023, 20:05</h1>
              <div className="flex gap-1 items-center">
                <ViewsIcon className="text-base mt-[2px]" />
                <span>{postData.post.views || 0}</span>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col gap-3 mt-2 "
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(
                getPreferredLanguage(
                  postData.post.descr_uz,
                  postData.post.descr_en,
                  postData.post.descr_ru,
                  postData.post.descr_krill
                )
              ),
            }}
          ></div>
        </div>

        {/* Recommended post cards */}
        <div className="w-[35%] flex flex-col gap-3 max-xl:w-full max-xl:gap-5">
          <div className="flex mt-1">
            <h1 className="bg-primary text-white dark:text-white px-2 py-1 text-sm rounded-[5px]">
              {t("recommended")}
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {postData.recommended.map((item) => (
              <CardPrimary key={item.id} size="sm" data={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-5">
        <div className="bg-black h-[1px] bg-opacity-40 dark:bg-white"></div>
        <div className="flex justify-between text-primary dark:text-white">
          <h1 className="py-1 text-xl rounded-[5px] font-semibold max-md:text-base">
            {t("related")}
          </h1>

          <div className="flex gap-1 items-center cursor-pointer">
            <h1 className="max-md:text-xs">{t("explore_all")}</h1>
            <OpenIcon className="text-xl" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 max-xl:grid-cols-2 max-md:grid-cols-1">
          {postData.related.map((post) => (
            <VideoOrImageCard key={post.id} cardType="IMAGE" data={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
