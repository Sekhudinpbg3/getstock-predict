import axios from "axios";

export const setDetailInfo = (code) => {
  const url = `https://flask-prediction-api.herokuapp.com/api/getinfo?code=${code}`;
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        const responseAPI = response.data;

        dispatch({
          type: "SET_DETAIL_INFO",
          payload: responseAPI,
        });
      })
      .catch((err) => {
        console.log("Gagal Memuat detail info, refresh halaman!", err);
      });
  };
};

export const setDetailHistory = (code) => {
  const url = `https://flask-prediction-api.herokuapp.com/api/get_history?code=${code}`;
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        const responseAPI = response.data;

        dispatch({
          type: "SET_DETAIL_HISTORY",
          payload: responseAPI,
        });
      })
      .catch((err) => {
        console.log("Gagal Memuat detail history, refresh halaman!", err);
      });
  };
};

export const setDetailBalanceSheet = (code) => {
  const url = `https://flask-prediction-api.herokuapp.com/api/get_balance?code=${code}`;
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        const responseAPI = response.data;

        dispatch({
          type: "SET_DETAIL_BALANCESHEET",
          payload: responseAPI,
        });
      })
      .catch((err) => {
        console.log("Gagal Memuat detail balancesheet, refresh halaman!", err);
      });
  };
};

export const setDetailEarnings = (code) => {
  const url = `https://flask-prediction-api.herokuapp.com/api/get_earnings?code=${code}`;
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        const responseAPI = response.data;

        dispatch({
          type: "SET_DETAIL_EARNINGS",
          payload: responseAPI,
        });
      })
      .catch((err) => {
        console.log("Gagal Memuat detail earnings, refresh halaman!", err);
      });
  };
};

export const setDetailCashflow = (code) => {
  const url = `https://flask-prediction-api.herokuapp.com/api/get_cashflow?code=${code}`;
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        const responseAPI = response.data;

        dispatch({
          type: "SET_DETAIL_CASHFLOW",
          payload: responseAPI,
        });
      })
      .catch((err) => {
        console.log("Gagal Memuat detail cashflow, refresh halaman!", err);
      });
  };
};

export const setDetailResultPredictionLR = (form) => {
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
          type: "SET_DETAIL_PREDICTION_LR",
          payload: responseAPI,
        });
      })
      .catch((err) => {
        console.log("Gagal Memuat detail cashflow, refresh halaman!", err);
      });
  };
};

export const setResetDetailResultPredictionLR = () => {
  return (dispatch) => {
    dispatch({
      type: "SET_RESET_DETAIL_PREDICTION_LR",
      payload: "",
    });
  };
};

export const setResetAllDataDetail = () => {
  return (dispatch) => {
    dispatch({
      type: "SET_RESET_ALL_DETAIL",
      payload: "",
    });
  };
};
