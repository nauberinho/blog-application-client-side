import {
  StatisticsState,
  StatisticsAction,
  REGISTER_LAST_VIEWED
} from "./types";

const initialState: StatisticsState = {
  lastViewed: {}
};

export function statisticsReducer(
  state = initialState,
  action: StatisticsAction
): StatisticsState {
  switch (action.type) {
    case REGISTER_LAST_VIEWED: {
      return { lastViewed: action.payload };
    }
    default:
      return state;
  }
}
