import { configureStore } from '@reduxjs/toolkit';
import intinerarySlice from './reducers/intineraryReducer/intinerarySlice';
import activitySlice from './reducers/activityReducer/activity-slice';
import destinySlice from './reducers/destinyReducer/destiny-slice';


export const store = configureStore({
  reducer: {
    intineraryState: intinerarySlice,
    activityState: activitySlice,
    destiny: destinySlice,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
