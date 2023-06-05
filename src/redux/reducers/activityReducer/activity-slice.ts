import { createAsyncThunk, createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { ActivityInitialState, initialState } from "./activity-state";
import { getActivities } from "../../../services/getActivitites";
import { RootState } from "../../store";
import { ICarrouselData } from "../../../models/carrouset";

export const activitySlice: Slice<Partial<ActivityInitialState>> = createSlice({
  name: 'activity',
  initialState,
  reducers: {
      setCurrentActivity: (state, action: PayloadAction<ICarrouselData>) => {
          return { ...state, currentActivity: action.payload}
      }
  },
});

export const { setCurrentActivity } = activitySlice.actions;

export default activitySlice.reducer;