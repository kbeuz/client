import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between text-white py-7 px-4">
      <Link to={"/"}>
        <img src="/assets/logo-dark.png" className="h-9 max-md:h-8" />
      </Link>

      {/* <div className="flex flex-col gap-5 justify-between w-[65%] px-10 max-md:w-full max-md:px-0">
        <ul className="flex gap-3 font-medium max-md:text-sm">
          <li>{t("footer.items_list.0")}</li>
          <li>{t("footer.items_list.1")}</li>
          <li>{t("footer.items_list.2")}</li>
          <li>{t("footer.items_list.3")}</li>
        </ul>

        <span className="text-sm">{t("footer.descr")}</span>

        <h1 className="text-sm">{t("footer.organization")}</h1>
      </div> */}

      <div className="flex gap-2 ">
        <Link to={"https://t.me/+rXZjifVKsOs4NmUy"} target="_blank">
          <img src="/assets/telegram.png" className="h-8" />
        </Link>
        <Link to={"https://youtube.com/@KBEuz"} target="_blank">
          <img src="/assets/youtube.png" className="h-8" />
        </Link>
        <Link
          to={"https://instagram.com/kbe_uz?igshid=NGExMmI2YTkyZg=="}
          target="_blank"
        >
          <img src="/assets/instagram.png" className="h-8" />
        </Link>
        <Link
          to={"https://www.facebook.com/KBEuz-108024465685050/?mibextid=ZbWKwL"}
          target="_blank"
        >
          <img src="/assets/facebook.png" className="h-8" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
