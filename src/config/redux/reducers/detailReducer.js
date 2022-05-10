const initialStateDetail = {
  detailInfo: "",
  detailHistory: "",

  detailBalanceSheet: "",
  detailEarnings: "",
  detailCashFlow: "",

  detailResultPrediction: "",
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
    case "SET_RESET_ALL_DETAIL":
      return {
        ...state,
        detailInfo: payload,
        detailHistory: payload,
        detailBalanceSheet: payload,
        detailEarnings: payload,
        detailCashFlow: payload,
      };
    case "SET_DETAIL_PREDICTION_LR":
      return {
        ...state,
        detailResultPrediction: payload,
      };
      case "SET_RESET_DETAIL_PREDICTION_LR":
      return {
        ...state,
        detailResultPrediction: payload,
      };
    default:
      return state;
  }
};
