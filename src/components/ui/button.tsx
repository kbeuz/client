import React from "react";
import { ReloadIcon } from "@radix-ui/react-icons";

const Button = ({
  children,
  onClick,
  isLoading,
}: {
  isLoading?: boolean;
  children?: React.ReactElement | string;
  onClick?: () => void;
}) => {
  return (
    <button
      className="px-[60px] py-2 text-sm bg-primary text-white rounded-lg outline-none flex items-center gap-1 disabled:dark:bg-opacity-80 disabled:bg-opacity-70"
      onClick={onClick}
      disabled={isLoading}
    >
      <ReloadIcon className={`mr-1 mt-[2px] ${isLoading && "animate-spin"}`} />
      {children}
    </button>
  );
};

export default Button;
