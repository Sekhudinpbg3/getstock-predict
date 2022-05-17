const initialStatePredictionStock = {
  // LINEAR MODEL
  formX: {
    code: "",
    open: "",
    high: "",
    low: "",
  },
  dataPredictionStockLR: "",
  autoFill: false,
  // ANN MODEL
  formX_ann: {
    code: "",
    open: "",
    high: "",
    low: "",
  },
  // dataPredictionStockANN: "",
  autoFill_ann: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialStatePredictionStock, action) => {
  switch (action.type) {
    // LINEAR MODEL
    case "SET_FORM_INPUT":
      return {
        ...state,
        formX: {
          ...state.formX,
          [action.formType]: action.formValue,
        },
      };
    case "SET_PREDICTION_RESULT":
      return {
        ...state,
        dataPredictionStockLR: {
          "Prediksi Harga Close": parseFloat(action.payload.result).toFixed(2),
          MAE: action.payload.mae,
          Pesan: action.payload.message,
        },
      };
    case "RESET_ALL_PREDICTION":
      return {
        ...state,
        dataPredictionStockLR: ""
      };
    case "SET_AUTO_FILL":
      return {
        ...state,
        autoFill: action.payload,
      };

    // ANN MODEL
    case "SET_FORM_INPUT_ANN":
      return {
        ...state,
        formX_ann: {
          ...state.formX_ann,
          [action.formType]: action.formValue,
        },
      };
    case "SET_PREDICTION_RESULT_ANN":
      return {
        ...state,
        dataPredictionStockANN: {
          "Prediksi Harga Close": action.payload,
          MAE: "ini mae",
          Pesan: "ini message",
        },
      };
    case "RESET_FORM_ANN":
      return {
        ...state,
        formX_ann: {
          code: action.payload,
          open: "",
          high: "",
          low: "",
        },
      };
    case "SET_AUTO_FILL_ANN":
      return {
        ...state,
        autoFill_ann: action.payload,
      };

    // DEFAULT
    default:
      return state;
  }
};
