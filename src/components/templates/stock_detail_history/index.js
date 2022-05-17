import React, { useState } from "react";
import * as tf from "@tensorflow/tfjs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Gap, Input, TextDinamis } from "../../atoms";
import ChartStock from "../chart";
import { ToggleInput } from "../../molekuls";
import {setFormX_ANN, setPrediction_ANN, resetPrediction_ANN, setAutoFill_ANN
} from "../../../config/redux/actions";

const StockDetailHistory = () => {
  const { detailHistory, detailInfo } = useSelector(
    (state) => state.detailReducer
  );
  const { formX_ann, autoFill_ann, dataPredictionStockANN } = useSelector(
    (state) => state.predictionReducer
  );
  const dispatch = useDispatch();
  const param = useParams();
  const code = param.code;
  const [isLoading, setIsLoading] = useState(false);
  // =========================================================
  const onSubmitPrediction = async () => {
    const model = await tf.loadLayersModel(
      "https://getstock-predict.vercel.app/model.json"
    );
    if (formX_ann["open"] && formX_ann["high"] && formX_ann["low"]) {
      setIsLoading(true);
      const data = [[formX_ann["open"], formX_ann["high"], formX_ann["low"]]];
      const input = tf.tensor(data);
      const prediction = model.predict(input);
      // set Result
      prediction.data().then((d) => {
        dispatch(setPrediction_ANN(parseFloat(d[0]).toFixed(2)));
      });
    } else {
      alert("Kolom tidak boleh kosong!");
    }
  };
  // =========================================================
  const toggleOnClick = () => {
    if (autoFill_ann === false) {
      dispatch(setFormX_ANN('code', code));
      dispatch(setFormX_ANN("open", detailInfo.result["open"]));
      dispatch(setFormX_ANN("high", detailInfo.result["high"]));
      dispatch(setFormX_ANN("low", detailInfo.result["low"]));
      setIsLoading(false);
      dispatch(setAutoFill_ANN(autoFill_ann));
    } else {
      dispatch(resetPrediction_ANN())
      setIsLoading(false);
      dispatch(setAutoFill_ANN(autoFill_ann));
    }
  };

  return (
    <div>
      <TextDinamis
        title={`History Close Price Saham ${code}`}
        semibold
        wfull={true}
      />
      <Gap className={"h-5"} />
      <ChartStock
        data={detailHistory["Close"]}
        title={code}
        subTitle={`Source: yahoo-finance`}
      />
      <Gap className={"h-5"} />

      <div className="w-3/4 sm:w-1/2 lg:w-1/3 px-4 py-2">
        <TextDinamis
          title="Prediksi Saham Menggunakan JST Model"
          textColor={"text-green-500"}
          semibold={true}
        />
        <Gap className={"h-4"} />
        <ToggleInput
          disabled={detailInfo ? false : true}
          titleOnOff={["auto fill", "Manual"]}
          setDefault={autoFill_ann}
          onClick={toggleOnClick}
        />
        <Gap className={`h-3`} />
        <Input
          title={"Open"}
          disabled={detailInfo ? false : true}
          value={formX_ann["open"]}
          type="number"
          readOnly={autoFill_ann}
          onChange={(e) => {
            const value = +e.target.value;
            typeof value === "number" && value > 0
              ? dispatch(setFormX_ANN("open", value))
              : dispatch(setFormX_ANN("open", ""));
            dispatch(setFormX_ANN("code", code));
          }}
        />
        <Gap className={`h-1`} />
        <Input
          title={"High"}
          disabled={detailInfo ? false : true}
          value={formX_ann["high"]}
          type={"number"}
          readOnly={autoFill_ann}
          onChange={(e) => {
            const value = +e.target.value;
            typeof value === "number" && value > 0
              ? dispatch(setFormX_ANN("high", value))
              : dispatch(setFormX_ANN("high", ""));
          }}
        />
        <Gap className={`h-1`} />
        <Input
          title={"Low"}
          disabled={detailInfo ? false : true}
          value={formX_ann["low"]}
          type={"number"}
          readOnly={autoFill_ann}
          onChange={(e) => {
            const value = +e.target.value;
            typeof value === "number" && value > 0
              ? dispatch(setFormX_ANN("low", value))
              : dispatch(setFormX_ANN("low", ""));
          }}
        />
        <Gap className={`h-3`} />
        <Button
          primary={true}
          title="Prediksi Harga Close"
          onClick={onSubmitPrediction}
        />
        <Gap className={"h-3"} />
        {dataPredictionStockANN !== "" ? (
          <div>
            <TextDinamis title={"Prediksi Harga Close (IDR)"} semibold={true} />
            <div className="text-center py-1 border-2 rounded">
              <TextDinamis textAlign={"text-center"} title={dataPredictionStockANN} />
            </div>
          </div>
        ) : isLoading ? (
          <div>
            <TextDinamis />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default StockDetailHistory;
