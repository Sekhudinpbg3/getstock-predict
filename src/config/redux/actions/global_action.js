import axios from "axios";
import { notificationAlert } from "../../../utils/custom-alert";

export const setAllStocks = () => {
  const url = `https://getstock-info.herokuapp.com/v1/stocks/getall`;
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        const responseAPI = response.data;

        dispatch({
          type: "SET_ALL_STOCKS",
          payload: responseAPI,
        });
      })
      .catch((err) => {
        notificationAlert(
          "danger",
          "Request Gagal!",
          "Beberapa data gagal direquest, untuk kelancaran cobalah refresh halaman.",
          `${err}`
        );
      });
  };
};

export const setAllIndex = () => {
  const url = `https://getstock-info.herokuapp.com/v1/stocks/index`;
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        const responseAPI = response.data;

        dispatch({
          type: "SET_ALL_INDEX",
          payload: responseAPI,
        });
      })
      .catch((err) => {
        notificationAlert(
          "danger",
          "Request Gagal!",
          "Beberapa data gagal direquest, untuk kelancaran cobalah refresh halaman.",
          `${err}`
        );
      });
  };
};

export const setAllSectors = () => {
  const url = `https://getstock-info.herokuapp.com/v1/stocks/sectors`;
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        const responseAPI = response.data;

        dispatch({
          type: "SET_ALL_SECTORS",
          payload: responseAPI,
        });
      })
      .catch((err) => {
        notificationAlert(
          "danger",
          "Request Gagal!",
          "Beberapa data gagal direquest, untuk kelancaran cobalah refresh halaman.",
          `${err}`
        );
      });
  };
};
