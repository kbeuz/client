import { RiSunFill as Sun } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useFetchCategories, useLanguageStore } from "../../hooks";
import { SingleCategoryType } from "../../types";
import { useEffect } from "react";
import { getPreferredLanguage } from "../../lib";

const SubNavbar = () => {
  const fetchCategoryQuery = useFetchCategories();
  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);

  const categoryData: SingleCategoryType[] =
    fetchCategoryQuery.data?.data?.categories;

  useEffect(() => {
    fetchCategoryQuery.refetch();
  }, [selectedLanguage]);

  return (
    <div className="flex">
      <ul className="flex justify-between gap-4 overflow-x-auto text-primary dark:text-white">
        {categoryData?.map((category) => (
          <Link to={`/category/${category.id}`} key={category.id}>
            {getPreferredLanguage(
              category.name_uz,
              category.name_en,
              category.name_ru,
              category.name_krill
            )}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SubNavbar;
