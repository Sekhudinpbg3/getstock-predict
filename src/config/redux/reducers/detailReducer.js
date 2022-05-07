const initialStateDetail = {
  detailInfo: "",
  detailHistory: "",

  detailBalanceSheet: "",
  detailEarnings: "",
  detailCashFlow: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialStateDetail, { type, payload }) => {
  switch (type) {
    case "SET_DETAIL_INFO":
      return {
        ...state,
        detailInfo: payload,
      };
    case "SET_DETAIL_HISTORY":
      return {
        ...state,
        detailHistory: payload,
      };
    case "SET_DETAIL_BALANCESHEET":
      return {
        ...state,
        detailBalanceSheet: payload,
      };
    case "SET_DETAIL_EARNINGS":
      return {
        ...state,
        detailEarnings: payload,
      };
    case "SET_DETAIL_CASHFLOW":
      return {
        ...state,
        detailCashFlow: payload,
      };
    default:
      return state;
  }
};