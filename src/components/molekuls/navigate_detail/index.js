import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Gap, Label } from "../../atoms";

const NavigateDetail = ({
  title,
  linkInfo,
  linkHistory,
  linkFinancials,
}) => {
  const [info, setInfo] = useState(1);
  const [history, setHistory] = useState(0);
  const [financials, setFinancials] = useState(0);

  const getLocation = useLocation();
  const listPathname = getLocation.pathname.split("/");

  window.onpopstate = () => {
    if (listPathname[4] === "info") {
      setInfo(1);
      setHistory(0);
      setFinancials(0);
    } else if (listPathname[4] === "history") {
      setInfo(0);
      setHistory(1);
      setFinancials(0);
    } else if (listPathname[4] === "financials") {
      setInfo(0);
      setHistory(0);
      setFinancials(1);
    }
  };

  window.onload = () => {
    if (listPathname[4] === "info") {
      setInfo(1);
      setHistory(0);
      setFinancials(0);
    } else if (listPathname[4] === "history") {
      setInfo(0);
      setHistory(1);
      setFinancials(0);
    } else if (listPathname[4] === "financials") {
      setInfo(0);
      setHistory(0);
      setFinancials(1);
    }
  };

  const linkActif = `bg-gray-100 text-center py-0.5`;
  const linkPasif = `bg-gray-300 text-center py-0.5 active:bg-gray-400 lg:hover:bg-gray-300 lg:active:bg-gray-400`;

  return (
    <div>
      <div className={`border-b-2`}>
        <Gap className={`h-5 md:h-7 lg:h-9 2xl:h-11`} />
        <Label header={true} title={title ? title : `Your-navigate_detail`} />
      </div>
      <Gap className={`h-1 md:h-2 lg:h-3`} />
      <div
        className={`w-full grid grid-cols-3 border-2 border-gray-400 rounded-md`}
      >
        <Link
          to={linkInfo ? linkInfo : `#`}
          className={
            info === 1
              ? `${linkActif} rounded-tl rounded-bl`
              : `${linkPasif} rounded-tl rounded-bl`
          }
          onClick={() => {
            setInfo(1);
            setHistory(0);
            setFinancials(0);
          }}
        >
          <Label
            title={`Info & Prediction`}
            customColor={info === 1 ? `text-green-500` : `text-gray-500`}
          />
        </Link>
        <Link
          to={linkHistory ? linkHistory : `#`}
          className={history === 1 ? `${linkActif}` : `${linkPasif}`}
          onClick={() => {
            setInfo(0);
            setHistory(1);
            setFinancials(0);
          }}
        >
          <Label
            title={`History`}
            customColor={history === 1 ? `text-green-500` : `text-gray-500`}
          />
        </Link>
        <Link
          to={linkFinancials ? linkFinancials : `#`}
          className={
            financials === 1
              ? `${linkActif} rounded-tr rounded-br`
              : `${linkPasif} rounded-tr rounded-br`
          }
          onClick={() => {
            setInfo(0);
            setHistory(0);
            setFinancials(1);
          }}
        >
          <Label
            title={`Financials`}
            customColor={financials === 1 ? `text-green-500` : `text-gray-500`}
          />
        </Link>
      </div>
    </div>
  );
};

export default NavigateDetail;
