import axios from "axios";

// LINEAR MODEL
export const setFormX_LR = (formType, formValue) => {
  return { type: "SET_FORM_LR", formType, formValue };
};

export const setPrediction_LR = (form) => {
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
          type: "SET_PREDICTION_LR",
          payload: responseAPI,
        });
      })
      .catch((err) => {
        console.log("Gagal Memuat detail cashflow, refresh halaman!", err);
      });
  };
};

export const resetPrediction_LR = (code) => {
  return (dispatch) => {
    dispatch({
      type: "RESET_PREDICTION_LR",
    });
  };
};

export const setAutoFill_LR = (autoFill) => {
  return (dispatch) => {
    let value = "";
    autoFill === true ? (value = false) : (value = true);
    dispatch({
      type: "SET_AUTOFILL_LR",
      payload: value,
    });
  };
};

// ANN MODEL
export const setFormX_ANN = (formType, formValue) => {
  return { type: "SET_FORM_ANN", formType, formValue };
};

export const setPrediction_ANN = (value) => {
  return (dispatch) => {
    dispatch({
      type: "SET_PREDICTION_ANN",
      payload: value,
    });
  };
};

export const resetPrediction_ANN = () => {
  return (dispatch) => {
    dispatch({
      type: "RESET_PREDICTION_ANN",
    });
  };
};

export const setAutoFill_ANN = (autoFill) => {
  return (dispatch) => {
    let value = "";
    autoFill === true ? (value = false) : (value = true);
    dispatch({
      type: "SET_AUTOFILL_ANN",
      payload: value,
    });
  };
};

// HARD RESET DATA PREDICTION
export const resetDataPrediction = (value) => {
  return (dispatch) => {
    dispatch({
      type: "HARD_RESET_ALL_PREDICTION",
      payload: value,
    });
  };
};
