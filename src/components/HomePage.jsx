import React from "react";
import Nav from "./Nav";
import LeftHomePage from "./Homepage/LeftHomePage";
import RightHomePage from "./Homepage/RightHomePage";

function HomePage() {
  return (
    <div className="h-screen overflow-hidden max-h-[900px] w-full relative place-items-center sm:h-[100vh] flex flex-col justify-center pt-20 backdrop-blur-sm">
      <Nav />
      <div className="w-full h-full flex flex-col md:flex-row md:px-20 ">
        <LeftHomePage />
        <RightHomePage />
      </div>

      <div className="ball w-32 h-80 rotate-[-40deg] bg-purple-500 absolute top-10 left-[-20px] z-[-8] blur-3xl opacity-30"></div>
      <div className="hidden md:flex w-40 h-52 rotate-[-40deg] bg-purple-500 absolute top-12 right-[25%] z-[-8] blur-[70px] opacity-30 "></div>
      <div className=" fixed transition-all ease-in top-0 bottom-0 overflow-hidden left-0 right-0  z-[-9]  dark:bg-[#262626] ">
        <div className="hidden: xl:h-[200vh] w-1/2 bg-[#CA5EFA] relative right-[-68%] top-[-25%] rotate-[25deg] "></div>
      </div>
    </div>
  );
}

export default HomePage;
