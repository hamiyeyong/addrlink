import { combineReducers } from "redux";
import search from "./Search";
import pagination from "./Pagination";

const rootReducer = combineReducers({
  search,
  pagination,
});

export default rootReducer;
