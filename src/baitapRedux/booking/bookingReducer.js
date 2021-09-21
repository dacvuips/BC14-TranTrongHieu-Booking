// import computer from "../../baitapRedux/oantuxi/computer"
import * as ActionType from "./modules/constants";
const init = {
  bookingMovie: [],
};

const bookingReducer = (state = init, action) => {
  switch (action.type) {
    case ActionType.DAT_VE: {
      let danhSachGheDangDatUpdate = [...state.bookingMovie];
      let index = danhSachGheDangDatUpdate.findIndex(
        (index) => index.soGhe === action.value.soGhe
      );
      if (index !== -1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        danhSachGheDangDatUpdate.push(action.value);
      }
      state.bookingMovie = danhSachGheDangDatUpdate;
      return { ...state };
    }
    case ActionType.HUY_VE: {
      let danhSachGheDangDatUpdate = [...state.bookingMovie];
      let index = danhSachGheDangDatUpdate.findIndex(
        (index) => index.soGhe === action.value
      );
      if (index !== -1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      }
      state.bookingMovie = danhSachGheDangDatUpdate;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default bookingReducer;
