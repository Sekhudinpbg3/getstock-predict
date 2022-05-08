const initialStateHome = {
  defaultDataTable: "",
  dataTableWithParams: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialStateHome, { type, payload }) => {
  switch (type) {
    case "SET_DATA_TABLE_DEFAULT":
      return {
        ...state,
        defaultDataTable: payload,
      };

    case "SET_DATA_TABLE_WITH_PARAMS":
      return {
        ...state,
        dataTableWithParams: payload,
      };
    case "RESET_DATA_TABLE":
      return {
        ...state,
        defaultDataTable: payload,
        dataTableWithParams: payload,
      };
    default:
      return state;
  }
};
