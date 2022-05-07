import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import globalReducer from "./globalReducer";
import homeReducer from "./homeReducer";

const reducer = combineReducers({
  globalReducer, homeReducer, detailReducer
});

export default reducer;
