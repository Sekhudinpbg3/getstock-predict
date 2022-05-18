import React from "react";
import { CardIcon, Gap, Label, Link, TextDinamis } from "../../components";
import { RecomendSystem, Stockimage } from "../../assets";

const Home = () => {
  return (
    <div className={`w-screen max-h-screen`}>
      <div className={`text-center mx-8 mt-8 md:mt-12`}>
        <Label
          title={`Welcome to Our Page`}
          className={`font-lexend text-xl md:text-2xl xl:text-3xl font-bold text-green-500`}
        />
        <TextDinamis
          textAlign={"text-center"}
          semibold={true}
          title={`This page is a simple implementation of what we learned during our
          independent study activities.`}
        />
        <Gap className={`h-3 md:h-5 lg:h-7 w-full`} />
        <Label
          title={`To continue select one`}
          customFont={`font-releway`}
          labelBold={true}
        />
        <Gap className={`h-3 md:h-5 lg:h-7 2xl:h-10 w-full`} />
      </div>

      <div className={`flex justify-center`}>
        <div className={`block md:flex md:justify-center md:items-center`}>
          <CardIcon
            src={Stockimage}
            className={`w-60 h-60 md:w-80 lg:w-96  md:h-80 lg:h-96 `}
            title={`Stock Forecasting`}
            href={`/main/stock`}
            navigate={`/main/stock`}
          />
          <div className={`text-center`}>
            <Label
              title={`or `}
              className={`text-gray-400 font-releway font-semibold mx-8 lg:mx-12 my-3 lg:font-bold`}
            />
          </div>
          <div>
            <CardIcon
              src={RecomendSystem}
              className={`w-60 h-60 md:w-80 lg:w-96  md:h-80 lg:h-96 `}
              title={`Computer Vision`}
              href={`/main/comvis`}
              navigate={`/main/comvis`}
            />
          </div>
        </div>
      </div>

      <div className={`hidden text-center md:block`}>
        <Gap className={`h-28`} />
        <Link title={`©2022 Sekhudin | `} href={`#`} textLink={`Bantuan`} />
      </div>
    </div>
  );
};

export default Home;
