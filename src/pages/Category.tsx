import { useParams } from "react-router-dom";
import { CardPrimary } from "../components/cards";
import { Button } from "../components/ui";
import { useFetchPostsByQueries } from "../hooks";
import { PostsByQueryType } from "../types";
import { Loader } from "../components";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getPreferredLanguage } from "../lib";

const Category = () => {
  const { categoryId } = useParams();
  const [limit, setLimit] = useState(15);
  const { t } = useTranslation();

  const fetchPostsbyQueries = useFetchPostsByQueries({
    page: 1,
    limit,
    categoryId: +categoryId,
    orderBy: "desc",
  });

  const postsData: PostsByQueryType = fetchPostsbyQueries.data?.data;

  useEffect(() => {
    fetchPostsbyQueries.refetch();
  }, [categoryId, limit]);

  const handleLoadMore = () => {
    setLimit(limit + 1);
  };

  return (
    <div className="pb-5 flex flex-col gap-5">
      {fetchPostsbyQueries.isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-xl font-medium dark:text-white mt-5">
            {getPreferredLanguage(
              postsData?.meta.category.name_uz,
              postsData?.meta.category.name_en,
              postsData?.meta.category.name_ru,
              postsData?.meta.category.name_krill
            )}
          </h1>

          {/* posts list */}
          <div className="rounded-lg shadow-lg dark:bg-[#10205B] p-6 shadow-lg flex flex-col gap-4 max-md:w-full max-h-full">
            <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
              {postsData?.post.length === 0 ? (
                <h1>{t("not_found.data")}</h1>
              ) : (
                postsData?.post.map((posts) => (
                  <CardPrimary key={posts.id} data={posts} />
                ))
              )}
            </div>
          </div>

          <div
            className={`flex justify-center ${
              (postsData.meta.totalPostsList <= 10 ||
                postsData.post.length === postsData.meta.totalPostsList) &&
              "hidden"
            }`}
          >
            <Button
              onClick={handleLoadMore}
              isLoading={fetchPostsbyQueries.isFetching}
            >
              Ko'proq yuklash
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Category;
