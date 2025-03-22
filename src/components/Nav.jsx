import { useState } from "react";
// import { div } from 'react-router-dom'
import ThemeToggle from "./Homepage/ToogleTheme"

function Nav() {

  const [theme, setTheme] = useState(true);


  function themeMode() {
    setTheme(!theme)
  }


  return (
    <div className="fixed top-0 px-5 w-full flex h-12 place-items-end  text-black  md:px-11  justify-between">
      <div>
        <p className="text-3xl font-light text-gray-700 dark:text-white">BEN.</p>
      </div>

      <div className="hidden md:flex w-full justify-center gap-10 dark:text-white">
        <div className="border-b-2 border-b-purple-400">HOME</div>
        <div>PROJECTS</div>
        <div>ABOUT ME</div>
      </div>
      <div className="flex justify-center place-items-center gap-8 dark:text-white">
        <ThemeToggle/>
        
        {/* <i className="bi bi-list text-3xl md:hidden"></i> */}
      </div>
    </div>
  );
}

export default Nav;
