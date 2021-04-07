import { Reducer } from "redux";

import ActionModel from "../../models/ActionModel";
import NewsCategoryStateModel from "../../models/NewsCategoryStateModel";
import { initialState } from "./EntertainmentState";

const entertainmentReducer: Reducer = (
  state: NewsCategoryStateModel = initialState,
  action: ActionModel<undefined>
): NewsCategoryStateModel => {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    default:
      return state;
  }
};

export default entertainmentReducer;
