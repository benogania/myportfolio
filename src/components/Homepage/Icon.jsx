import React from "react";

const Icon = ({ icon }) => {
  return (
    <i
      className={`bi bi-${icon} flex justify-center place-items-center transition-all ease-in duration-75 cursor-pointer text-3xl w-10 hover:text-[#CA5EFA] hover:text-4xl hover:animate-pulse`}
    ></i>
  );
};

export default Icon;
