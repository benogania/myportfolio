import React from "react";
import TypingEffect from "./Type";
import Icon from "./Icon";
import {motion} from 'framer-motion'


function LeftHomePage() {
  return (
    <div className="h-full flex w-full place-items-center mt-6 flex-col px-6 xl:w-1/2 md:justify-center md:place-items-center  xl:pl-20 ">
      <div className="w-full">
        <TypingEffect />
        <div className="dark:text-white">
          <p className="text-4xl m-0 pt-2 text-gray-700  sm:text-4xl md:text-6xl dark:text-white">
            FULL STACK{" "}
          </p>
          <div className="text-4xl  m-0  text-gray-700  sm:text-4xl md:text-6xl dark:text-white">
            WEB <span className="">DEVELOPER</span>{" "}
          </div>

          <p className="my-4 text-md text-md">
            Full Stack web developer with a foundation knowledge in frontend and
            basic understanding in backend development.{" "}
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col mt-4 xl:place-items-start">

        <div className="flex flex-col justify-center place-items-center gap-2 mt-6 sm:flex-row sm:gap-5 w-full sm:px-8  md:justify-start md:place-items-start md:p-0">

          <button className="border transition-all ease-in border-1 border-[#CA5EFA] w-60 h-10 rounded-full dark:text-white hover:font-bold hover:text-purple-600">
            RESUME <i className="bi bi-download ml-3"></i>
          </button>

          <button className="w-60 h-10  transition-all ease-in  rounded-full text-white hover:bg-purple-500 hover:font-bold  bg-gradient-to-r from-[#b700ff] via-purple-500 to-[#CA5EFA] ">
            PROJECTS
          </button>
        </div>

        <div className=" justify-center md:justify-start dark:text-gray-300 h-28 flex text-gray-600 gap-5 md:place-items-center  px-16 sm:px-4">
          <Icon icon="facebook" />
          <Icon icon="telegram" />
          <Icon icon="envelope-at-fill" />
          <Icon icon="github" />
        </div>
      </div>
    </div>
  );
}

export default LeftHomePage;
