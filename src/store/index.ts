import { combineReducers } from "redux";

import { statisticsReducer } from "./statistics/reducers";

export const rootReducer = combineReducers({
  statistics: statisticsReducer
});

export type AppState = ReturnType<typeof rootReducer>;
