import { IExtraActivities } from "../../../models/extraActivitiesReducer";

export interface ActivityInitialState {
  currentActivity: IExtraActivities,
}
export const initialState: Partial<ActivityInitialState> = {
  currentActivity: undefined,
}
