import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Gap, IconAhref, Input, Label, TextDinamis } from "../../atoms";
import { ToggleInput } from "../../molekuls";
import { DisclosureCustom } from "../../organisms";

const StockDetailInfo = () => {
  const { detailInfo } = useSelector((state) => state.detailReducer);
  const InfoEmiten = detailInfo ? detailInfo.result : "";
  const infoDetail = InfoEmiten
    ? {
        "Harga Pembukaan": InfoEmiten["open"].toLocaleString(),
        "Harga Tertinggi": InfoEmiten["high"].toLocaleString(),
        "Harga Terendah": InfoEmiten["low"].toLocaleString(),
        "Harga Penutupan Sebelumnya": InfoEmiten["previous"].toLocaleString(),
        "Market Cap (IDR)": InfoEmiten["market_cap"].toLocaleString(),
        "Volume Perdagangan (saham)": InfoEmiten["volume"].toLocaleString(),
      }
    : "";
  const dataDisclosure = {
    "Business Summary": (
      <div className={`px-4 py-2 bg-white rounded shadow`}>
        <TextDinamis title={InfoEmiten["bussines_summary"]} textjustify />
      </div>
    ),
    "Info Perdagangan": (
      <div className={`px-4 py-2 bg-white rounded shadow`}>
        {infoDetail === "" ? (
          <TextDinamis />
        ) : (
          Object.keys(infoDetail).map((detail, index) => (
            <div key={index}>
              <div className={`flex`}>
                <TextDinamis title={detail} />
                <TextDinamis title={infoDetail[detail]} textLight={true} />
              </div>
              <Gap className={`h-2`} />
            </div>
          ))
        )}
      </div>
    ),
    // Tambahkan data disini
  };

  const dataDisclosurePredict = {
    Prediksi: (
      <div className={`px-4 py-2 bg-white rounded shadow`}>
        <TextDinamis title={"Catatan:"} semibold />
        <TextDinamis
          textjustify={true}
          textLight={true}
          title={
            "Input prediksi atau X adalah data yang digunakan sebagai dasar perumusan prediksi, Sedangkann Output atau Y adalah keluaran yang didapat dari perhitungan input. Input terdiri dari 'Harga Open', 'Harga High' dan 'Harga Low', sementara Output adalah Harga Close, Harga Close inilah yang dinamakan hasil prediksi."
          }
        />
      </div>
    ),
  };

  // Bagian Toggle prediksi
  const [enableToggle, setEnableToggle] = useState(false);
  console.log('Manual', enableToggle);

  return (
    <div>
      <div className={`flex`}>
        <div>
          <IconAhref
            className={`w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20`}
            src={detailInfo ? InfoEmiten["logo_url"] : null}
            alt={InfoEmiten["code"]}
            href={InfoEmiten["website"]}
          />
        </div>
        <Gap className={"w-3 lg:w-10"} />
        <Label title={InfoEmiten["name"]} labelBold={true} />
      </div>
      <Gap className={`h-5`} />
      <Label title={"Tentang"} labelBold />
      <DisclosureCustom listData={dataDisclosure} />
      <Gap className={`h-2`} />
      <Label title={"Prediksi"} labelBold />
      <DisclosureCustom listData={dataDisclosurePredict} />
      <div className={`w-3/4 px-4 py-2`}>
        <ToggleInput
          titleOnOff={["Manual", "Otomatis"]}
          onClick={() => {
            enableToggle ? setEnableToggle(false) : setEnableToggle(true);
          }}
        />
        <Input title={"Open"} />
        <Gap className={`h-1`} />
        <Input title={"High"} />
        <Gap className={`h-1`} />
        <Input title={"Low"} />
        <Gap className={`h-1`} />
      </div>
    </div>
  );
};

export default StockDetailInfo;
