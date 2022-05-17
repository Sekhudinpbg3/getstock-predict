import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import globalReducer from "./globalReducer";
import homeReducer from "./homeReducer";
import predictionReducer from './predictionReducer'

const reducer = combineReducers({
  globalReducer, homeReducer, detailReducer, predictionReducer,
});

export default reducer;
