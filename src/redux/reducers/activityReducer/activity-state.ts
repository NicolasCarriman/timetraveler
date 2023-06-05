import { ActivityState } from "../../../models/activity";
import { ICarrouselData } from "../../../models/carrouset";

export interface ActivityInitialState {
  loading: boolean,
  currentActivity: ICarrouselData,
  activities: ICarrouselData[],
  error: string,
}
export const initialState: Partial<ActivityInitialState> = {
  loading: false,
  currentActivity: undefined,
  activities: [],
  error: '',
}
