import { useSearchParams } from "react-router-dom";
import { CardPrimary } from "../components/cards";
import { useFetchPostsByQueries, useLanguageStore } from "../hooks";
import { PostsByQueryType } from "../types";
import { useEffect, useState } from "react";
import { Button } from "../components/ui";
import { Loader } from "../components";
import { useTranslation } from "react-i18next";

const Search = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("q");
  const [postDataBySearch, setPostDataBySearch] = useState<PostsByQueryType>();
  const { t } = useTranslation();
  const storedLang = useLanguageStore((state) => state.selectedLanguage);

  const [page, setPage] = useState(1);

  const fetchpostbyQueries = useFetchPostsByQueries({
    page,
    limit: 10,
    orderBy: "desc",
    keyword,
  });

  useEffect(() => {
    fetchpostbyQueries.refetch();
  }, [keyword, page]);

  useEffect(() => {
    if (Array.isArray(postDataBySearch?.post)) {
      setPostDataBySearch((prev) => ({
        meta: fetchpostbyQueries.data.data?.meta,
        post: [...prev?.post, ...fetchpostbyQueries.data?.data.post],
      }));
      return;
    }

    setPostDataBySearch(fetchpostbyQueries.data?.data);
  }, [fetchpostbyQueries.data]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col gap-5">
      {fetchpostbyQueries.isLoading ? (
        <Loader />
      ) : (
        <>
          {/* Search part */}
          <div className="flex justify-center">
            {storedLang === "uz" ? (
              <h1 className="py-3 mt-3 text-xl max-md:text-base border-b-2 text-center border-b-primary dark:border-b-secondary w-[60%] max-md:w-full">
                <span className="font-medium">“{keyword}”</span> so'zi bo'yicha{" "}
                <span className=" text-primary dark:text-[#2F8AF5] font-medium ">
                  {postDataBySearch?.meta.totalPostsList || 0}
                </span>{" "}
                ta maqola
              </h1>
            ) : storedLang === "en" ? (
              <h1 className="py-3 mt-3 text-xl max-md:text-base border-b-2 text-center border-b-primary dark:border-b-secondary w-[60%] max-md:w-full">
                <span className=" text-primary dark:text-[#2F8AF5] font-medium ">
                  {postDataBySearch?.meta.totalPostsList || 0}
                </span>{" "}
                articles on <span className="font-medium">“{keyword}”</span>
              </h1>
            ) : storedLang === "krill" ? (
              <h1 className="py-3 mt-3 text-xl max-md:text-base border-b-2 text-center border-b-primary dark:border-b-secondary w-[60%] max-md:w-full">
                <span className="font-medium">“{keyword}”</span> сўзи бўйича{" "}
                <span className=" text-primary dark:text-[#2F8AF5] font-medium ">
                  {postDataBySearch?.meta.totalPostsList || 0}
                </span>{" "}
                та мақола
              </h1>
            ) : storedLang === "ru" ? (
              <h1 className="py-3 mt-3 text-xl max-md:text-base border-b-2 text-center border-b-primary dark:border-b-secondary w-[60%] max-md:w-full">
                <span className=" text-primary dark:text-[#2F8AF5] font-medium ">
                  {postDataBySearch?.meta.totalPostsList || 0}
                </span>{" "}
                статей по слову <span className="font-medium">“{keyword}”</span>
              </h1>
            ) : null}
          </div>

          {/* Found post results */}
          <div className="rounded-lg shadow-lg dark:bg-[#10205B] p-6 shadow-lg flex flex-col gap-4 max-md:w-full max-h-full">
            {postDataBySearch?.post.length === 0 ? (
              <h1 className="text-center">{t("not_found.search")}</h1>
            ) : (
              <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
                {postDataBySearch?.post.map((post) => (
                  <CardPrimary key={post.id} data={post} />
                ))}
              </div>
            )}
          </div>

          {/* Load more */}
          <div
            className={`flex justify-center ${
              (postDataBySearch?.meta.totalPostsList <= 10 && "hidden") ||
              (postDataBySearch?.meta.total_pages == page && "hidden")
            }`}
          >
            <Button
              onClick={handleLoadMore}
              isLoading={fetchpostbyQueries.isFetching}
            >
              Ko'proq yuklash
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
