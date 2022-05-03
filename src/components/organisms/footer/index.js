import React from "react";
import { Github, Instagram, Linkedin } from "../../../assets/icons";
import { DataImage } from "../../../assets/images";
import { Icon, Label, Link, TextDinamis } from "../../atoms";

const Footer = () => {
  return (
    <div
      className={`px-3 py-1.5 sm:px-5 md:px-10 md:py-2 lg:px-16 xl:px-24 xl:py-2.5 2xl:px-36 2xl:py-3 w-full bg-white drop-shadow-lg border-2 border-gray-100 `}
    >
      <div className={`mt-2 hidden md:block `}>
        <Label
          className={`font-lexend text-xl font-bold text-gray-500 border-b-2 pb-2`}
          title={`Thank You!`}
        />
        <div className={`flex justify-between mt-3`}>
          <div>
            <Label
              className={`font-raleway text-base font-bold text-gray-500 mt-2`}
              title={`What's Next?`}
            />
            <div className={`text-center`}>
              <Icon
                src={DataImage}
                className={`w-40 -mt-5 bg-white`}
                hover={true}
              />
              <Label
                className={`font-inter -mt-8 mb-2 text-sm font-semibold text-gray-500`}
                title={`Data Visualisation`}
              />
            </div>
          </div>

          <div>
            <Label
              className={`font-inter text-base font-bold text-gray-500 my-2`}
              title={`Need help?`}
            />
            <div className={`mt-2 mb-4`}>
              <Label
                className={`font-inter text-sm font-semibold text-green-500`}
                title={`Call Us`}
              />
              <TextDinamis
                className={`font-inter font-light text-sm text-gray-500`}
                title={`+62818 0220 3863`}
              />
            </div>
            <div className={`mt-2 mb-4`}>
              <Label
                className={`font-inter text-sm font-semibold text-green-500`}
                title={`General Inquiries`}
              />
              <TextDinamis
                className={`font-inter font-light text-sm text-gray-500`}
                title={`sekhudinpbg3@gmail.com`}
              />
            </div>
          </div>

          <div>
            <Label
              className={`font-inter text-base font-bold text-gray-500 my-2`}
              title={`Connect with Us`}
            />
            <div className={`flex justify-between`}>
              <Icon src={Github} className={`w-8 mt-2 mx-1 hover:rotate-12`} />
              <Icon
                src={Instagram}
                className={`w-8 mt-2 mx-1 hover:rotate-12`}
              />
              <Icon
                src={Linkedin}
                className={`w-8 mt-2 mx-1 hover:rotate-12`}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex justify-center my-1 py-1 border-t-0 border-gray-300 md:my-2 md:py-2 md:border-t-2`}
      >
        <Link
          title={`©2022 Sekhudin | `}
          textLink={`getStock`}
          href={`/`}
          textSize={"text-xs md:text-sm "}
          linkTextStyle={`lg:font-bold`}
        />
      </div>
    </div>
  );
};

export default Footer;
