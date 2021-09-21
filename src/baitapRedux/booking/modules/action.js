import * as ActionType from "./constants";

export const actionDatGhe = (value) => {
  return {
    type: ActionType.DAT_VE,
    value,
  };
};

export const actionHuyGhe = (value) => {
  return {
    type: ActionType.HUY_VE,
    value,
  };
};
