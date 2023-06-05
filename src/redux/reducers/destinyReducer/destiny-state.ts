import { intineraryType } from "../../../services/getIntinerary"
import { getActualIntinerary } from "../intineraryReducer/intinerary-state"

export interface DestinyState{
  Destinations: intineraryType[],
  currentDestiny: intineraryType | undefined
}

export const initialState: DestinyState = {
  Destinations: [],
  currentDestiny: undefined
}