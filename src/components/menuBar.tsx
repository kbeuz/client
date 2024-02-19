import { useEffect, useState } from "react";
import { ImCancelCircle as CancelIcon } from "react-icons/im";
import {
  IoMoonOutline as DarkModeIcon,
  IoSunny as LightModeIcon,
} from "react-icons/io5";
import { useFetchCategories, useLanguageStore, useMenuSheet } from "../hooks";
import { languages } from "../constants";
import { SingleCategoryType } from "../types";
import { useNavigate } from "react-router-dom";
import i18n from "../i18n/config";
import { getPreferredLanguage } from "../lib";

const MenuBar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const storedLang = useLanguageStore((state) => state.selectedLanguage);

  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const selectedLang = languages.find((item) => item.id === storedLang);
    return selectedLang ? selectedLang.id : "uz";
  });

  const navigate = useNavigate();
  const fetchCategoryQuery = useFetchCategories();
  const categoryData: SingleCategoryType[] =
    fetchCategoryQuery.data?.data?.categories;

  const menuBarSheet = useMenuSheet();

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }

    localStorage.setItem("theme", theme!);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const setSelectedLangInStore = useLanguageStore(
    (state) => state.setSelectedLanguage
  );

  const goToCategory = (categoryId: number) => {
    menuBarSheet.onClose();
    return navigate(`/category/${categoryId}`);
  };

  const onLangSelect = (id: string, lang: string) => {
    localStorage.setItem("lang", id);
    setSelectedLangInStore(id);
    i18n.changeLanguage(id);
    setSelectedLanguage(id);
  };

  return (
    <div className="flex flex-col gap-7 p-6">
      {/* Navbar of menu bar */}
      <div className="flex justify-between">
        {/* Logo */}
        <div>
          {theme === "light" ? (
            <img src="/assets/logo-light.png" alt="not_loaded" width={100} />
          ) : (
            <img src="/assets/logo-dark.png" alt="not_loaded" width={100} />
          )}
        </div>

        <div className="flex items-center">
          <CancelIcon
            className="text-2xl text-secondary dark:text-white dark:opacity-80"
            onClick={menuBarSheet.onClose}
          />
        </div>
      </div>

      {/* Appearance and preferences */}
      <div className="flex justify-between gap-4">
        {/* Switch Theme */}
        <div className="flex">
          <div
            className={`bg-primary bg-opacity-5 flex gap-2 rounded-3xl py-1 px-1 cursor-pointer transition-transform duration-200 dark:bg-opacity-20`}
            onClick={toggleTheme}
          >
            <div className="p-2 bg-primary rounded-full self-center cursor-pointer duration-400 dark:bg-primary_dark dark:bg-opacity-5">
              <LightModeIcon className="text-white font-semibold dark:text-secondary " />
            </div>

            <div className="p-2 dark:bg-primary cursor-pointer dark:rounded-full dark:self-center duration-400 transition">
              <DarkModeIcon className="dark:text-white text-primary" />
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="flex justify-between text-xl gap-4">
          {/* Languages */}
          <ul className="dark:bg-[#202b50] bg-primary bg-opacity-[5%]  flex gap-1 text-base py-[6px] px-2 rounded-xl dark:text-white">
            {languages.map((lang) => {
              return (
                <li
                  key={lang.id}
                  className={`px-3 py-[2px] text-primary dark:text-white cursor-pointer ${
                    selectedLanguage === lang.id
                      ? "bg-primary rounded-md text-white"
                      : ""
                  }`}
                  onClick={() => onLangSelect(lang.id, lang.label)}
                >
                  {lang.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-3">
        <h1 className="font-medium text-xl">Ruknlar</h1>
        <ul className="flex flex-col ml-8 gap-1 dark:text-white opacity-80 dark:opacity-90">
          {categoryData?.map((category) => (
            <li
              onClick={() => goToCategory(category.id)}
              key={category.id}
              className="list-disc cursor-pointer"
            >
              {getPreferredLanguage(
                category.name_uz,
                category.name_en,
                category.name_ru,
                category.name_krill
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
