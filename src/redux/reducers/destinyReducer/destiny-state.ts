import { intineraryType } from "../../../services/getIntinerary"

export interface DestinyState{
  Destinations: intineraryType[],
  currentDestiny: intineraryType | undefined
}

export const initialState: DestinyState = {
  Destinations: [],
  currentDestiny: undefined
}