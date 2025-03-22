import { useState, useEffect } from "react";

const ThemeToggle = () => {
  // Check localStorage for theme preference
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);

  // Apply the theme to the document
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className=" ">
        <i className={theme == "light" ? "bi bi-moon-stars-fill cursor-pointer text-2xl text-gray-800 xl:text-white dark:text-white": "bi text-gray-800 bi-sun cursor-pointer text-3xl xl:text-white dark:text-white"} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        
        </i>
        
    </div>
  );
};

export default ThemeToggle;
