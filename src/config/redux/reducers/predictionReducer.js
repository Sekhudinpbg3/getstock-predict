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
  dataPredictionStockANN: "",
  autoFill_ann: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialStatePredictionStock, action) => {
  switch (action.type) {
    // LINEAR MODEL
    case "SET_FORM_LR":
      return {
        ...state,
        formX: {
          ...state.formX,
          [action.formType]: action.formValue,
        },
      };
    case "SET_PREDICTION_LR":
      return {
        ...state,
        dataPredictionStockLR: {
          "Prediksi Harga Close": parseFloat(action.payload.result).toFixed(2),
          MAE: action.payload.mae,
          Pesan: action.payload.message,
        },
      };
    case "RESET_PREDICTION_LR":
      return {
        ...state,
        dataPredictionStockLR: "",
      };
    case "SET_AUTOFILL_LR":
      return {
        ...state,
        autoFill: action.payload,
      };

    // ANN MODEL
    case "SET_FORM_ANN":
      return {
        ...state,
        formX_ann: {
          ...state.formX_ann,
          [action.formType]: action.formValue,
        },
      };
    case "SET_PREDICTION_ANN":
      return {
        ...state,
        dataPredictionStockANN: action.payload
      };
    case "RESET_PREDICTION_ANN":
      return {
        ...state,
        dataPredictionStockANN: "",
      };
    case "SET_AUTOFILL_ANN":
      return {
        ...state,
        autoFill_ann: action.payload,
      };

    // RESET ALL PREDICTION DATA LR AND ANN
    case "HARD_RESET_ALL_PREDICTION":
      return {
        ...state,
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
        dataPredictionStockANN: "",
        autoFill_ann: false,
      };

    // DEFAULT
    default:
      return state;
  }
};
