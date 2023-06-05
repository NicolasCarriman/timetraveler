import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { ICoreIntineraryData, IDestiny } from "../../../models/intineraryReducer";
import { initialState } from "./intinerary-state";


export const intinerarySlice: Slice<ICoreIntineraryData> = createSlice({
  name:'cardState',
  initialState,
  reducers: {
      setIntinerary: (state, action: PayloadAction<IDestiny[]>) => {
          const intinerary = action.payload;
          console.log('intinerarySlice :',intinerary)
          return { ...state, intinerary}
      },
      setDestiny: (state, action: PayloadAction<IDestiny>) => {
        const currentDestiny = action.payload;
        return {
          ...state,
          currentDestiny
        }
      }
  }
});

export const {
  setIntinerary,
  setDestiny,
} = intinerarySlice.actions;

export default intinerarySlice.reducer;