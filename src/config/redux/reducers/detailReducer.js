const initialStateDetail = {
  detailInfo: "",
  detailHistory: "",
  periodHistory: "2y",
  // valid period 1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max

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
    case "SET_PERIOD_HISTORY":
      return {
        ...state,
        periodHistory: payload,
      };
    case "RESET_ALL_DETAIL":
      return {
        detailInfo: "",
        detailHistory: "",
        detailBalanceSheet: "",
        detailEarnings: "",
        detailCashFlow: "",
      };
    default:
      return state;
  }
};
