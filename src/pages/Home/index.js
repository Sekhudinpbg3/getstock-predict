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
          semibold={true}
          title={`This page is a simple implementation of what we learned during our
          independent study activities.`}
        />
        <Gap className={`h-5 md:h-7 lg:h-10 w-full`} />
        <Label
          title={`To continue select one`}
          customFont={`font-releway`}
          labelBold={true}
        />
        <Gap className={`h-5 md:h-6 lg:h-8 2xl:h-10 w-full`} />
      </div>

      <div className={`flex justify-center`}>
        <div className={`block md:flex md:justify-center md:items-center`}>
          <div className={`w-72 md:w-80 lg:w-96 `}>
            <CardIcon
              src={RecomendSystem}
              title={`Recomend System`}
              href={`/main/recsys`}
              navigate={`/main/recsys`}
            />
          </div>
          <div className={`text-center`}>
            <Label
              title={`or `}
              className={`text-gray-400 font-releway font-semibold mx-8 lg:mx-12 my-3 lg:font-bold`}
            />
          </div>
          <div className={`w-72 md:w-80 lg:w-96`}>
            <CardIcon
              src={Stockimage}
              title={`Stock Forecasting`}
              href={`/main/stock`}
              navigate={`/main/stock`}
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
