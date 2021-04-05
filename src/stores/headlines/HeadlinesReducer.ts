import { Reducer } from "redux";

import ActionModel from "../../models/ActionModel";
import NewsCategoryStateModel from "../../models/NewsCategoryStateModel";
import { initiaState } from "./HeadlinesState";

const HeadlinesReducer: Reducer = (
  state: NewsCategoryStateModel = initiaState,
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

export default HeadlinesReducer;
