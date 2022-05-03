const initialStateGlobal = {
  allStocks: null,

  allIndex: null,

  allSectors: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialStateGlobal, { type, payload }) => {
  switch (type) {
    case "SET_ALL_STOCKS":
      return {
        ...state,
        allStocks: payload,
      };
    case "SET_ALL_INDEX":
      return {
        ...state,
        allIndex: payload,
      };
    case "SET_ALL_SECTORS":
      return {
        ...state,
        allSectors: payload,
      };
    default:
      return state;
  }
};
