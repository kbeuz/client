import { LuSearch as SearchIcon } from "react-icons/lu";
import { useMenuSheet, useSearchModal } from "../../hooks";
import { Sheet } from "../ui";
import { MenuBar } from "..";
import { Link } from "react-router-dom";

const NavbarMobile = () => {
  const searchModal = useSearchModal();
  const menuBarSheet = useMenuSheet();

  const theme = localStorage.getItem("theme") || "light";

  return (
    <>
      <Sheet isOpen={menuBarSheet.isOpen}>
        <MenuBar />
      </Sheet>

      <div className="w-[90%] mx-auto flex justify-between ">
        {/*  menu */}
        <div
          className={`flex items-center cursor-pointer lg:hidden`}
          onClick={menuBarSheet.onOpen}
        >
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

        <SearchIcon
          className="text-[22px] cursor-pointer self-center text-secondary dark:text-white"
          onClick={() => {
            searchModal.isOpen ? searchModal.onClose() : searchModal.onOpen();
          }}
        />
      </div>
    </>
  );
};

export default NavbarMobile;
