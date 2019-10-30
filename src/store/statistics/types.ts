export interface StatisticsState {
  lastViewed: {};
}

export interface StatisticsAction {
  type: string;
  payload: object;
}

export const REGISTER_LAST_VIEWED = "REGISTER_LAST_VIEWED";
