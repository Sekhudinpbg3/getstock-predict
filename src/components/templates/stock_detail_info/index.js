import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormX,
  setDataPredictionStockLR,
  setResetAllPrediction,
  setAutoFill,
} from "../../../config/redux/actions/";
import { useParams } from "react-router-dom";
import { Button, Gap, IconAhref, Input, Label, TextDinamis } from "../../atoms";
import { ToggleInput } from "../../molekuls";
import { DisclosureCustom } from "../../organisms";

const StockDetailInfo = () => {
  const dispatch = useDispatch();
  const { detailInfo } = useSelector((state) => state.detailReducer);
  const { formX, dataPredictionStockLR, autoFill } = useSelector(
    (state) => state.predictionReducer
  );
  // Variabel untuk data prediksi
  const param = useParams();
  const code = param.code;
  const [isLoading, setIsLoading] = useState(false);

  // variabel json untul komponen disclosure
  const selectedInfoEmiten =
    detailInfo !== ""
      ? {
          "Harga Pembukaan": detailInfo.result["open"],
          "Harga Tertinggi": detailInfo.result["high"],
          "Harga Terendah": detailInfo.result["low"],
          "Harga Penutupan Sebelumnya": detailInfo.result["previous"],
          "Market Cap (IDR)": detailInfo.result["market_cap"],
          "Volume Perdagangan (saham)": detailInfo.result["volume"],
        }
      : "";
  const disclosureInfo = {
    "Business Summary": (
      <div className={`px-4 py-2 bg-white rounded shadow`}>
        <TextDinamis
          title={detailInfo ? detailInfo.result["bussines_summary"] : null}
          textAlign={"text-justify"}
        />
      </div>
    ),
    "Info Perdagangan": (
      <div className={`px-4 py-2 bg-white rounded shadow`}>
        {selectedInfoEmiten ? (
          Object.keys(selectedInfoEmiten).map((detail, index) => (
            <div key={index}>
              <div className={`flex`}>
                <TextDinamis title={detail} wfull />
                <TextDinamis title=":" wfull />
                <TextDinamis
                  title={
                    selectedInfoEmiten[detail]
                      ? selectedInfoEmiten[detail].toLocaleString()
                      : "-"
                  }
                  textLight={true}
                  wfull
                />
              </div>
              <Gap className={`h-2`} />
            </div>
          ))
        ) : (
          <TextDinamis />
        )}
      </div>
    ),
  };

  const disclosurePrediction = {
    Prediksi: (
      <div className={`px-4 py-2 bg-white rounded shadow`}>
        <TextDinamis title={detailInfo ? "Catatan:" : "..."} semibold />
        <TextDinamis
          textAlign={"text-justify"}
          textLight={true}
          title={
            detailInfo
              ? "Input prediksi atau X adalah data yang digunakan sebagai dasar perumusan prediksi, Sedangkann Output atau Y adalah keluaran yang didapat dari perhitungan input. Input terdiri dari 'Harga Open', 'Harga High' dan 'Harga Low', sementara Output adalah Harga Close, Harga Close inilah yang dinamakan hasil prediksi."
              : ""
          }
        />
      </div>
    ),
  };

  // Function TogleOnclick
  const toggleOnClick = () => {
    if (autoFill === false) {
      dispatch(setResetAllPrediction());
      dispatch(setFormX("code", code));
      dispatch(setFormX("open", detailInfo.result["open"]));
      dispatch(setFormX("high", detailInfo.result["high"]));
      dispatch(setFormX("low", detailInfo.result["low"]));
      setIsLoading(false);
      dispatch(setAutoFill(autoFill));
    } else {
      dispatch(setResetAllPrediction(code));
      setIsLoading(false);
      dispatch(setAutoFill(autoFill));
    }
  };
  const onSubmitPrediction = () => {
    if (formX["open"] && formX["high"] && formX["low"]) {
      dispatch(setDataPredictionStockLR(formX));
      setIsLoading(true);
    } else {
      alert("Kolom tidak boleh kosong!");
    }
  };

  return (
    <div>
      <div className={`flex items-center`}>
        <IconAhref
          className={`w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20`}
          src={detailInfo ? detailInfo.result["logo_url"] : null}
          alt={detailInfo ? detailInfo.result["code"] : ""}
          href={detailInfo ? detailInfo.result["website"] : "#"}
        />
        <Gap className={"w-3 lg:w-10"} />
        <Label
          title={detailInfo ? detailInfo.result["name"] : null}
          labelBold={true}
        />
      </div>
      <Gap className={`h-5`} />

      <Label title={"Tentang"} labelBold />
      <DisclosureCustom listData={disclosureInfo} />
      <Gap className={`h-2`} />
      <Label title={"Prediksi"} labelBold />
      <DisclosureCustom listData={disclosurePrediction} />
      <Gap className={"h-5"} />

      <div className={`w-3/4 sm:w-1/2 lg:w-1/3 px-4 py-2`}>
        <TextDinamis
          title="Prediksi Saham Menggunakan Linear Model"
          textColor={"text-green-500"}
          semibold={true}
        />
        <Gap className={"h-4"} />
        <ToggleInput
          disabled={detailInfo ? false : true}
          titleOnOff={["auto fill", "Manual"]}
          setDefault={autoFill}
          onClick={toggleOnClick}
        />
        <Gap className={`h-3`} />
        <Input
          title={"Open"}
          disabled={detailInfo ? false : true}
          value={formX["open"]}
          type="number"
          readOnly={autoFill}
          onChange={(e) => {
            const value = +e.target.value;
            typeof value === "number" && value > 0
              ? dispatch(setFormX("open", value))
              : dispatch(setFormX("open", ""));
            dispatch(setFormX("code", code));
          }}
        />
        <Gap className={`h-1`} />
        <Input
          title={"High"}
          disabled={detailInfo ? false : true}
          value={formX["high"]}
          type={"number"}
          readOnly={autoFill}
          onChange={(e) => {
            const value = +e.target.value;
            typeof value === "number" && value > 0
              ? dispatch(setFormX("high", value))
              : dispatch(setFormX("high", ""));
          }}
        />
        <Gap className={`h-1`} />
        <Input
          title={"Low"}
          disabled={detailInfo ? false : true}
          value={formX["low"]}
          type={"number"}
          readOnly={autoFill}
          onChange={(e) => {
            const value = +e.target.value;
            typeof value === "number" && value > 0
              ? dispatch(setFormX("low", value))
              : dispatch(setFormX("low", ""));
          }}
        />
        <Gap className={`h-3`} />
        <Button primary={true} title="Prediksi" onClick={onSubmitPrediction} />
        <Gap className={"h-3"} />

        {dataPredictionStockLR ? (
          Object.keys(dataPredictionStockLR).map((data, index) => (
            <div key={index}>
              <TextDinamis
                title={index === 0 ? "Prediksi Harga Close (IDR)" : data}
                semibold={index === 0 ? true : false}
              />
              <div className="text-center py-1 border-2 rounded">
                <TextDinamis
                  textColor={index === 0 ? "text-green-500" : ""}
                  textAlign={"text-center"}
                  title={
                    typeof dataPredictionStockLR[data] === "number"
                      ? Math.floor(dataPredictionStockLR[data]).toLocaleString()
                      : dataPredictionStockLR[data]
                  }
                />
              </div>
            </div>
          ))
        ) : isLoading ? (
          <div>
            <TextDinamis />
          </div>
        ) : null}
        <Gap className={"h-3"} />
      </div>
    </div>
  );
};

export default StockDetailInfo;
