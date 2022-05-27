import moment from "moment";
import React from "react";
import { Label, Link, Loading, TextDinamis } from "../../atoms";

const Table = ({ datas, height, onClickLink, ...props }) => {
  const allStockData = datas
    ? datas.length > 0
      ? datas.map((stock, index) => {
          return {
            Kode: stock.Code ? stock.Code : "Code Undifined",
            Nama: stock.Name ? stock.Name : "Name Undifined",
            Sektor: stock.NewSectorName ? stock.NewSectorName : "-",
            "Sub Industri": stock.NewSubIndustryName
              ? stock.NewSubIndustryName
              : "-",
            Last: stock.Last ? stock.Last.toLocaleString() : 0,
            Previous: stock.PrevClosingPrice
              ? stock.PrevClosingPrice.toLocaleString()
              : 0,
            Open: stock.AdjustedOpenPrice
              ? stock.AdjustedOpenPrice.toLocaleString()
              : 0,
            High: stock.AdjustedHighPrice
              ? stock.AdjustedHighPrice.toLocaleString()
              : 0,
            Low: stock.AdjustedLowPrice
              ? stock.AdjustedLowPrice.toLocaleString()
              : 0,
            PER: stock.Per ? stock.Per : "-",
            PBV: stock.Pbr ? stock.Pbr : "-",
            Volume: stock.Volume ? stock.Volume.toLocaleString() : "-",
            Value: stock.Value ? stock.Value.toLocaleString() : "-",
            "Frekuensi Perdagangan": stock.Frequency
              ? stock.Frequency.toLocaleString()
              : "-",
            ROE: stock.Roe ? stock.Roe : "-",
            "1 Hari": stock.OneDay ? (stock.OneDay * 100).toFixed(2) : "-",
            MtD: stock.Mtd ? (stock.Mtd * 100).toFixed(2) : "-",
            "1 Bulan": stock.OneMonth ? (stock.OneMonth * 100).toFixed(2) : "-",
            YtD: stock.Ytd ? (stock.Ytd * 100).toFixed(2) : "-",
            "1 Tahun": stock.OneYear ? (stock.OneYear * 100).toFixed(2) : "-",
            "Market Capital": stock.Capitalization
              ? stock.Capitalization.toLocaleString()
              : "-",
            "Last Update": stock.LastUpdate
              ? moment(stock.LastUpdate).local().format("LL")
              : "-",
          };
        })
      : "not found!"
    : null;

  return (
    <div
      className={
        height
          ? `${height} w-full overflow-x-scroll`
          : ` h-96 w-full overflow-x-scroll`
      }
    >
      {allStockData ? (
        allStockData === "not found!" ? (
          <div>
            <div
              className={`border-2 border-gray-700 z-20 px-2.5 py-2 xl:py-2.5 bg-gray-700 text-center`}
            >
              <Label title={`Something wrong!`} customColor={`text-white`} />
            </div>
            <div className={`bg-white text-center border-2 py-2 xl:py-2.5`}>
              <TextDinamis
                title={`the code you mean doesn't exist. to continue, press reset!`}
                textColor={`text-red-500`}
              />
            </div>
          </div>
        ) : (
          <table className={`whitespace-nowrap relative`}>
            <thead>
              <tr>
                {Object.keys(allStockData[0]).map((columnName, key) => (
                  <th
                    scope={`row`}
                    key={key}
                    className={
                      key === 0
                        ? `border sticky left-0 top-0 z-20 px-2.5 py-2 xl:py-2.5 bg-gray-700`
                        : `border sticky top-0 px-2.5 py-2 xl:py-2.5 bg-gray-700`
                    }
                  >
                    <Label title={columnName} customColor={`text-white`} />
                  </th>
                ))}
              </tr>
            </thead>

            <tbody {...props}>
              {allStockData.map((stock, index) => (
                <tr
                  key={index}
                  className={index % 2 ? `bg-gray-100` : `bg-white`}
                >
                  {Object.keys(stock).map((emiten, key) => (
                    <td
                      key={key}
                      className={
                        key === 0
                          ? `sticky left-0 z-10 text-center px-4 bg-white border`
                          : `text-center px-4 border`
                      }
                    >
                      {key === 0 ? (
                        <Link
                          textLink={stock[emiten]}
                          customColor={`text-gray-500`}
                          href={`../stock/detail/info/${stock[emiten]}`}
                          onClick={
                            onClickLink
                              ? onClickLink
                              : () => {
                                  alert("tambahkan function onClickLink!");
                                }
                          }
                        />
                      ) : key === 15 ||
                        key === 16 ||
                        key === 17 ||
                        key === 18 ||
                        key === 19 ? (
                        <TextDinamis
                          title={
                            stock[emiten]
                              ? stock[emiten] !== "-"
                                ? stock[emiten] + "%"
                                : stock[emiten]
                              : `-`
                          }
                          textLight={true}
                          textColor={
                            stock[emiten] > 0
                              ? "text-green-600"
                              : stock[emiten] < 0
                              ? `text-red-600`
                              : ""
                          }
                        />
                      ) : (
                        <TextDinamis
                          title={stock[emiten] ? stock[emiten] : `-`}
                          textLight={true}
                        />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )
      ) : (
        <div
          className={`w-full h-full bg-neutral-100 flex justify-center items-center `}
        >
          <div>
            <Loading />
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
