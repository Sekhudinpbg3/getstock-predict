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
        alert("Gagal Memuat detail info, refresh halaman!", err);
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
        alert("Gagal Memuat detail history, refresh halaman!", err);
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
        alert("Gagal Memuat detail balancesheet, refresh halaman!", err);
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
        alert("Gagal Memuat detail earnings, refresh halaman!", err);
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
          alert("Gagal Memuat detail cashflow, refresh halaman!", err);
        });
    };
  };
