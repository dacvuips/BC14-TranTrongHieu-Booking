import { combineReducers } from "redux";
import bookingReducer from "./../baitapRedux/booking/bookingReducer";

const rootReduce = combineReducers({
  bookingReducer,
});

export default rootReduce;
