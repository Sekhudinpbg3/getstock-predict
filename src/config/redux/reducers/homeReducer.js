const initialStateHome = {
  defaultDataTable: '',

  dataTableWithParams: '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialStateHome, { type, payload }) => {
  switch (type) {
    case "SET_DATA_TABLE_DEFAULT":
      return {
        ...state,
        defaultDataTable: payload,
      };

    case "SET_DATA_COMBO_STOCKS":
      return {
        ...state,
        dataComboBoxStocks: payload,
      };
    case "SET_DATA_TABLE_WITH_PARAMS":
      return {
        ...state,
        dataTableWithParams: payload,
      };
    default:
      return state;
  }
};
