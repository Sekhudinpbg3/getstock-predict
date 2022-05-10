import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  setDetailResultPredictionLR,
  setResetDetailResultPredictionLR,
} from "../../../config/redux/actions/detail_action";
import { Button, Gap, IconAhref, Input, Label, TextDinamis } from "../../atoms";
import { ToggleInput } from "../../molekuls";
import { DisclosureCustom } from "../../organisms";

const StockDetailInfo = () => {
  const dispatch = useDispatch();
  const { detailInfo, detailResultPrediction } = useSelector(
    (state) => state.detailReducer
  );
  const InfoEmiten = detailInfo ? detailInfo.result : "";
  // Variabel untuk data prediksi
  const param = useParams();
  const code = param.code;
  const [open, setOpen] = useState(0);
  const [high, setHigh] = useState(0);
  const [low, setLow] = useState(0);
  const [auto, setAuto] = useState(false);

  // variabel json untul komponen disclosure
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

  // Function TogleOnclick
  const toggleOnClick = () => {
    dispatch(setResetDetailResultPredictionLR());
    if (auto === false) {
      setOpen(InfoEmiten["open"]);
      setHigh(InfoEmiten["high"]);
      setLow(InfoEmiten["low"]);
      setAuto(true);
    } else if (auto === true) {
      setOpen(0);
      setHigh(0);
      setLow(0);
      setAuto(false);
    }
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

  // fungsi onsubmmit prediction
  const form = {
    code: code,
    open: open,
    high: high,
    low: low,
  };
  const onSubmitPrediction = () => {
    dispatch(setDetailResultPredictionLR(form));
  };
  console.log("PREDICTION: ", detailResultPrediction);

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
      <div className={`w-3/4 sm:w-1/2 lg:w-1/3 px-4 py-2`}>
        {InfoEmiten ? (
          <div>
            <ToggleInput
              titleOnOff={["Otomatis", "Manual"]}
              setDefault={false}
              onClick={toggleOnClick}
            />
            <Gap className={`h-3`} />
            <Input
              title={"Open"}
              type={"number"}
              readOnly={auto}
              value={open}
              onChange={(e) => {
                e.target.value < 0 ? setOpen("") : setOpen(e.target.value);
              }}
            />
            <Gap className={`h-1`} />
            <Input
              title={"High"}
              type={"number"}
              readOnly={auto}
              value={high}
              onChange={(e) => {
                e.target.value < 0 ? setHigh("") : setHigh(e.target.value);
              }}
            />
            <Gap className={`h-1`} />
            <Input
              title={"Low"}
              type={"number"}
              readOnly={auto}
              value={low}
              onChange={(e) => {
                e.target.value < 0 ? setLow("") : setLow(e.target.value);
              }}
            />
            <Gap className={`h-3`} />
            <Button
              primary={true}
              title="Prediksi"
              onClick={onSubmitPrediction}
            />
            <Gap className={"h-3"} />
            {detailResultPrediction ? (
              <div>
                <TextDinamis title={"Result:"} semibold />
                <div className="text-center py-2 border-2 rounded">
                  <Label
                    title={Math.floor(detailResultPrediction["result"])}
                    customColor={"text-green-500"}
                  />
                </div>
                <Gap className={`h-3`} />
                <TextDinamis title={"MAE:"} semibold />
                <div className="text-center py-2 border-2 rounded">
                  <Label
                    title={Math.floor(detailResultPrediction["mae"])}
                    customColor={"text-green-500"}
                  />
                </div>
              </div>
            ) : (
              <div>
                <TextDinamis title={"Result:"} semibold />
                <div className="text-center py-2 border-2 rounded">
                  <Label title={"0"} customColor={"text-green-500"} />
                </div>
                <Gap className={`h-3`} />
                <TextDinamis title={"MAE:"} semibold />
                <div className="text-center py-2 border-2 rounded">
                  <Label title={"0"} customColor={"text-green-500"} />
                </div>
              </div>
            )}
          </div>
        ) : (
          <TextDinamis />
        )}
      </div>
    </div>
  );
};

export default StockDetailInfo;
