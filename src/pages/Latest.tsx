import { CardPrimary } from "../components/cards";
import { Button } from "../components/ui";
import { useFetchPostsByQueries } from "../hooks";
import { PostsByQueryType } from "../types";
import { Loader } from "../components";
import { useEffect, useState } from "react";

const Latest = () => {
  const [limit, setLimit] = useState(15);

  const fetchPostsbyQueries = useFetchPostsByQueries({
    page: 1,
    limit,
    orderBy: "desc",
  });

  const postsData: PostsByQueryType = fetchPostsbyQueries.data?.data;

  useEffect(() => {
    fetchPostsbyQueries.refetch();
  }, [limit]);

  const handleLoadMore = () => {
    setLimit(limit + 15);
  };

  return (
    <div className="pb-5 flex flex-col gap-5">
      {fetchPostsbyQueries.isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-xl font-medium dark:text-white mt-5">
            So'ngi Yangiliklar
          </h1>

          {/* posts list */}
          <div className="rounded-lg shadow-lg dark:bg-[#10205B] p-6 shadow-lg flex flex-col gap-4 max-md:w-full max-h-full">
            <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
              {postsData?.post.map((posts) => (
                <CardPrimary key={posts.id} data={posts} />
              ))}
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

export default Latest;
