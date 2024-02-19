import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLanguageStore } from "../../hooks";
import { languages } from "../../constants";
import { useTranslation } from "react-i18next";

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);
  const storedLang = useLanguageStore((state) => state.selectedLanguage);
  const { i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const selectedLang = languages.find((item) => item.id === storedLang);
    return selectedLang ? selectedLang.label : "O'z";
  });

  const setSelectedLangInStore = useLanguageStore(
    (state) => state.setSelectedLanguage
  );

  const onLangSelect = (id: string, lang: string) => {
    localStorage.setItem("lang", id);
    setSelectedLangInStore(id);
    i18n.changeLanguage(id);
    setSelectedLanguage(lang);
  };

  return (
    <div
      className="py-[3px] -top-4 cursor-pointer px-2 rounded-lg font-medium bg-primary text-white dark:text-white  shadow-sm"
      onClick={() => setOpen(!open)}
    >
      {/* default bar */}
      <div className="flex justify-between gap-1 items-center">
        <span>{selectedLanguage}</span>
        <div>
          <IoIosArrowDown className={`${open && "rotate-180"}`} />
        </div>
      </div>

      <ul className={`${open ? "max-h-40" : "hidden"}`}>
        {languages
          .filter((lang) => lang.label !== selectedLanguage)
          .map((lang) => {
            return (
              <li
                key={lang.id}
                onClick={() => onLangSelect(lang.id, lang.label)}
              >
                {lang.label}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default LanguageDropdown;
