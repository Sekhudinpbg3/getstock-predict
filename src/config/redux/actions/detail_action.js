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

export const setDetailHistory = (code, perioHistory) => {
  const data = new FormData();
  data.append("period", perioHistory);
  const url = `https://flask-prediction-api.herokuapp.com/api/get_history?code=${code}`;
  return (dispatch) => {
    axios
      .post(url, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
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

export const setPeriodHistory = (value) => {
  return (dispatch) => {
    dispatch({
      type: "SET_PERIOD_HISTORY",
      payload: value
    });
  };
};

export const setResetAllDetail = () => {
  return (dispatch) => {
    dispatch({
      type: "RESET_ALL_DETAIL",
    });
  };
};
