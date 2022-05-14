const initialStatePredictionStock = {
  formX: {
    code: "",
    open: "",
    high: "",
    low: "",
  },
  dataPredictionStockLR: "",
  autoFill:false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialStatePredictionStock, action) => {
  switch (action.type) {
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
        dataPredictionStockLR:{
          'Prediksi Harga Close' : action.payload.result,
          'MAE' : action.payload.mae,
          'Pesan': action.payload.message
        },
      };
    case "RESET_ALL_PREDICTION":
      return {
        ...state,
        dataPredictionStockLR: '',
        formX: {
          code: action.payload,
          open: "",
          high: "",
          low: "",
        },
      };
      case "SET_AUTO_FILL":
        return{
          ...state,
          autoFill: action.payload
        }
    default:
      return state;
  }
};
