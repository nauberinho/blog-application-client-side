import {
  REGISTER_LAST_VIEWED,
  StatisticsState,
  StatisticsAction
} from "./types";

const registerLastViewed = (
  newStatisticsState: StatisticsState
): StatisticsAction => ({
  type: REGISTER_LAST_VIEWED,
  payload: newStatisticsState
});

export { registerLastViewed };
