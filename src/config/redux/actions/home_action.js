import axios from "axios";
import { notificationAlert } from "../../../utils/custom-alert";

export const setDataTableWithParams = (parameters, thisPage, perPage) => {
  const indexId = parameters ? parameters.index_id : null;
  const sectorId = parameters ? parameters.sector_id : null;
  const stockCode = parameters ? parameters.stock_code : null;

  const page = thisPage ? thisPage : null;
  const per_page = perPage ? perPage : null;

  const url =
    indexId || sectorId || stockCode
      ? indexId
        ? sectorId
          ? stockCode
            ? `https://getstock-info.herokuapp.com/v1/stocks/search?index_id=${indexId}&sector_id=${sectorId}&search=${stockCode}`
            : `https://getstock-info.herokuapp.com/v1/stocks/search?index_id=${indexId}&sector_id=${sectorId}`
          : stockCode
          ? `https://getstock-info.herokuapp.com/v1/stocks/search?index_id=${indexId}&search=${stockCode}`
          : `https://getstock-info.herokuapp.com/v1/stocks/search?index_id=${indexId}`
        : sectorId
        ? stockCode
          ? `https://getstock-info.herokuapp.com/v1/stocks/search?sector_id=${sectorId}&search=${stockCode}`
          : `https://getstock-info.herokuapp.com/v1/stocks/search?sector_id=${sectorId}`
        : stockCode
        ? `https://getstock-info.herokuapp.com/v1/stocks/search?search=${stockCode}`
        : `https://getstock-info.herokuapp.com/v1/stocks/search?page=${page}&per_page=${per_page}`
      : page || per_page
      ? page
        ? per_page
          ? `https://getstock-info.herokuapp.com/v1/stocks/search?page=${page}&per_page=${per_page}`
          : `https://getstock-info.herokuapp.com/v1/stocks/search?page=${page}&per_page=100`
        : per_page
        ? `https://getstock-info.herokuapp.com/v1/stocks/search?page=1&per_page=${per_page}`
        : `https://getstock-info.herokuapp.com/v1/stocks/search?page=1&per_page=100`
      : `https://getstock-info.herokuapp.com/v1/stocks/search?page=1&per_page=100`;

  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        const responseAPI = response.data;

        dispatch({
          type: "SET_DATA_TABLE_WITH_PARAMS",
          payload: responseAPI,
        });
      })
      .catch((err) => {
        notificationAlert(
          "danger",
          "Request Gagal!",
          "Data tabel gagal diperoleh, cek koneksi Anda!",
          `${err}`
        );
      });
  };
};

export const setResetDataTable = () => {
  return (dispatch) => {
    dispatch({
      type: "RESET_DATA_TABLE",
      payload: '',
    });
  };
};
