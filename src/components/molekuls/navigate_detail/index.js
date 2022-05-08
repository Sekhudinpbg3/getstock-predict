import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Gap, Label } from "../../atoms";

const NavigateDetail = ({
  title,
  linkInfo,
  linkHistory,
  linkFinancials,
  code,
}) => {
  const [info, setInfo] = useState(1);
  const [history, setHistory] = useState(0);
  const [financials, setFinancials] = useState(0);

  window.onload = () => {
    const currentPath = window.location.pathname;
    if (currentPath === `/main/stock/detail/info/${code}`) {
      setInfo(1);
      setHistory(0);
      setFinancials(0);
    } else if (currentPath === `/main/stock/detail/history/${code}`) {
      setInfo(0);
      setHistory(1);
      setFinancials(0);
    } else if (currentPath === `/main/stock/detail/financials/${code}`) {
      setInfo(0);
      setHistory(0);
      setFinancials(1);
    }
  };

  const linkActif = `bg-gray-200 text-center py-0.5`;
  const linkPasif = `bg-gray-700 text-center py-0.5 active:bg-gray-800 lg:hover:bg-gray-600 lg:active:bg-gray-800`;

  return (
    <div>
      <div className={`border-b-2`}>
        <Gap className={`h-5 md:h-7 lg:h-9 2xl:h-11`} />
        <Label header={true} title={title ? title : `Your-navigate_detail`} />
      </div>
      <Gap className={`h-1 md:h-2 lg:h-3`} />
      <div
        className={`w-full grid grid-cols-3 border-x-2 border-t-2 border-gray-700 rounded-t-md`}
      >
        <Link
          to={linkInfo ? linkInfo : `#`}
          className={
            info === 1
              ? `${linkActif} rounded-tl-md`
              : `${linkPasif} rounded-tl`
          }
          onClick={() => {
            setInfo(1);
            setHistory(0);
            setFinancials(0);
          }}
        >
          <Label
            title={`Info & Prediction`}
            customColor={info === 1 ? `text-gray-700` : `text-white`}
          />
        </Link>
        <Link
          to={linkHistory ? linkHistory : `#`}
          className={
            history === 1 ? `${linkActif} rounded-tl-md` : `${linkPasif}`
          }
          onClick={() => {
            setInfo(0);
            setHistory(1);
            setFinancials(0);
          }}
        >
          <Label
            title={`History`}
            customColor={history === 1 ? `text-gray-700` : `text-white`}
          />
        </Link>
        <Link
          to={linkFinancials ? linkFinancials : `#`}
          className={
            financials === 1
              ? `${linkActif} rounded-tr-md`
              : `${linkPasif} rounded-tr`
          }
          onClick={() => {
            setInfo(0);
            setHistory(0);
            setFinancials(1);
          }}
        >
          <Label
            title={`Financials`}
            customColor={financials === 1 ? `text-gray-700` : `text-white`}
          />
        </Link>
      </div>
    </div>
  );
};

export default NavigateDetail;
