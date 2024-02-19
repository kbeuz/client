import { LuSearch as SearchIcon } from "react-icons/lu";
import { ImCancelCircle as CancelIcon } from "react-icons/im";
import { useSearchModal } from "../../hooks";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();
  const searchModal = useSearchModal();

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const value = (event.target as HTMLInputElement).value;
      window.location.href = `/search?q=${value}`;
      searchModal.onClose();
    }
  };

  return (
    <div
      className={`flex w-full gap-2 flex-row dark:border-[2px] border-opacity-50 bg-white dark:bg-[#1d2648] border-primary px-4 py-2 max-lg:py-1 max-lg:px-3 rounded-lg shadow-lg
      }`}
    >
      <SearchIcon
        className={`text-secondary dark:text-white text-[22px] self-center cursor-pointer `}
      />

      <input
        type="text"
        placeholder="Search..."
        className={`outline-none bg-transparent text-[17px] p-1 w-full opacity-70 placeholder:dark:text-white placeholder:opacity-80 dark:text-white`}
        onKeyDown={handleInputKeyDown}
      />

      <CancelIcon
        className={`text-secondary text-opacity-70 text-[19px] self-center dark:text-white dark:opacity-70 cursor-pointer`}
        onClick={searchModal.onClose}
      />
    </div>
  );
};

export default SearchInput;
