import { useEffect, useState } from "react";
import {
  IoMoonOutline as DarkModeIcon,
  IoSunny as LightModeIcon,
} from "react-icons/io5";
import { LanguageDropdown } from "../ui";
import { Link } from "react-router-dom";
import { useSearchModal } from "../../hooks";
import { LuSearch as SearchIcon } from "react-icons/lu";

const NavbarDesktop = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const searchModal = useSearchModal();

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

  return (
    <div className="w-full flex justify-between  max-lg:w-[90%] ">
      {/* responsive menu */}
      <div className={`flex items-center lg:hidden`}>
        {theme === "light" ? (
          <img src="/assets/menu-light.svg" />
        ) : (
          <img src="/assets/menu-dark.svg" />
        )}
      </div>

      {/* Logo */}
      <Link to={"/"}>
        {theme === "light" ? (
          <img
            src="/assets/logo-light.png"
            alt="not_loaded"
            width={90}
            height={40}
          />
        ) : (
          <img
            src="/assets/logo-dark.png"
            alt="not_loaded"
            width={90}
            height={40}
          />
        )}
      </Link>

      <div className="flex gap-3 items-center">
        <div>
          <SearchIcon
            className={`text-secondary dark:text-white text-[22px] self-center cursor-pointer`}
            onClick={searchModal.onOpen}
          />
        </div>

        <div className="flex gap-2 items-center  max-lg:hidden">
          {/* Switch Theme */}
          <div
            className={`bg-primary bg-opacity-5 flex gap-2 rounded-2xl py-1 px-1 cursor-pointer transition-transform duration-200 dark:bg-opacity-20`}
            onClick={toggleTheme}
          >
            <div className="p-1 bg-primary rounded-full self-center cursor-pointer duration-400 dark:bg-primary_dark dark:bg-opacity-5">
              <LightModeIcon className="text-white font-semibold dark:text-secondary " />
            </div>

            <div className="p-1 dark:bg-primary cursor-pointer dark:rounded-full dark:self-center duration-400 transition">
              <DarkModeIcon className="dark:text-white text-primary" />
            </div>
          </div>

          {/* Langauge dropdown */}
          <LanguageDropdown />
        </div>
      </div>
    </div>
  );
};

export default NavbarDesktop;
