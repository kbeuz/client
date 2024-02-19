import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

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

  return (
    <div className="flex flex-col gap-8 justify-center items-center h-screen dark:bg-black">
      <h1 className="text-2xl text-black font-medium dark:text-white">
        Hello World!
      </h1>

      <h1
        className="bg-black text-white px-4 py-2 rounded-md cursor-pointer dark:bg-white dark:text-black"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Switch Mode
      </h1>
    </div>
  );
}

export default App;
