import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import globalReducer from "./globalReducer";
import homeReducer from "./homeReducer";
import predictionReducer from './predictionReducer'
import alertModalReducer from './alertModalReducer'

const reducer = combineReducers({
  globalReducer, homeReducer, detailReducer, predictionReducer, alertModalReducer
});

export default reducer;
