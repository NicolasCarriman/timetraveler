import { PayloadAction, Slice, createSlice } from "@reduxjs/toolkit";
import { DestinyState, initialState } from "./destiny-state";
import { intineraryType } from "../../../services/getIntinerary";

export const destinySlice: Slice<DestinyState> = createSlice({
  name:'cardState',
  initialState,
  reducers: {
      setDestinations: (state, action: PayloadAction<intineraryType[]>) => {
        const destinatations = action.payload;
        return { ...state, Destinations: destinatations }
      },
      setCurrentDestiny: (state, action: PayloadAction<intineraryType>) => {
        const currentDestiny = action.payload;
        return {
          ...state,
          currentDestiny
        }
      }
  }
});

export const {
  setDestinations,
  setCurrentDestiny,
} = destinySlice.actions;

export default destinySlice.reducer;