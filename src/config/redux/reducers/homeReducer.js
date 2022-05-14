const initialStateHome = {
  dataTableWithParams: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialStateHome, { type, payload }) => {
  switch (type) {
    case "SET_DATA_TABLE_WITH_PARAMS":
      return {
        ...state,
        dataTableWithParams: payload,
      };
    case "RESET_DATA_TABLE":
      return {
        dataTableWithParams: payload,
      };
    default:
      return state;
  }
};
