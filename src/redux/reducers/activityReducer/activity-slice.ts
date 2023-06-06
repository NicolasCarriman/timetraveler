import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { ActivityInitialState, initialState } from "./activity-state";
import { IExtraActivities } from "../../../models/extraActivitiesReducer";

export const activitySlice: Slice<Partial<ActivityInitialState>> = createSlice({
  name: 'activity',
  initialState,
  reducers: {
      setCurrentActivity: (state, action: PayloadAction<IExtraActivities>) => {
          return { ...state, currentActivity: action.payload}
      }
  },
});

export const { setCurrentActivity } = activitySlice.actions;

export default activitySlice.reducer;