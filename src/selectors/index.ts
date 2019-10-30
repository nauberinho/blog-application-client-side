import { createSelector } from "reselect";

const lastViewed = (state: any) => {
  console.log(state);
  return state.statistics.lastViewed;
};

console.log(lastViewed);

const selectLastViewed = createSelector(
  lastViewed,
  lastViewed => lastViewed
);

export { selectLastViewed };
