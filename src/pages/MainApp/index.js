import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Gap, Header } from "../../components";

const MainApp = () => {
  return (
    <div className={`relative w-full min-h-screen`}>
      <div className={`fixed inset-x-0 top-0 z-50`}>
        <Header href={`/`} />
      </div>
      <Gap className={`h-11 sm:h-14 md:h-16 xl:h-20 2xl:h-24`} />

      <div
        className={`min-h-screen bg-white px-7 sm:px-11 md:px-16 lg:px-28 xl:px-44 2xl:px-64 `}
      >
        <div className={`bg-white w-full min-h-screen`}>
          <Outlet />
        </div>
      </div>

      <Gap className={`h-11 sm:h-14 md:h-16 xl:h-20 2xl:h-24`} />
      <div className={`relative bottom-0`}>
        <Footer />
      </div>
    </div>
  );
};

export default MainApp;
