import React from "react";
import { Brand } from "../../atoms";

const Header = () => {
  return (
    <div
      className={`px-3 pt-2 pb-2 sm:px-5 sm:pt-2 sm:pb-4 md:px-10 md:pt-2 md:pb-4 lg:px-16 lg:pt-2 lg:pb-5 xl:px-24 xl:pt-2 xl:pb-6 2xl:px-36 2xl:pt-3 2xl:pb-6 w-full bg-white shadow-lg `}
    >
      <Brand href={`/`} title={`getStock`} fontFamily={`font-lexend`} />
    </div>
  );
};

export default Header;
