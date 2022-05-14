import axios from "axios";

export const setFormX = (formType, formValue) => {
  return { type: "SET_FORM_INPUT", formType, formValue };
};

export const setDataPredictionStockLR = (form) => {
  const data = new FormData();
  data.append("code", form.code);
  data.append("open", form.open);
  data.append("high", form.high);
  data.append("low", form.low);
  return (dispatch) => {
    axios
      .post(`https://flask-prediction-api.herokuapp.com/api/lr_predict`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        const responseAPI = response.data;

        dispatch({
          type: "SET_PREDICTION_RESULT",
          payload: responseAPI,
        });
      })
      .catch((err) => {
        console.log("Gagal Memuat detail cashflow, refresh halaman!", err);
      });
  };
};

export const setResetAllPrediction = (code) => {
  return (dispatch) => {
    dispatch({
      type: "RESET_ALL_PREDICTION",
      payload: code,
    });
  };
};

export const setAutoFill = (autoFill) => {
  return (dispatch) => {
    let value = "";
    autoFill === true ? (value = false) : (value = true);
    dispatch({
      type: "SET_AUTO_FILL",
      payload: value,
    });
  };
};
