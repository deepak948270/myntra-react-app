import {createSlice} from "@reduxjs/toolkit";
import default_items from "../data/items";


const itemsSlice = createSlice({
  name: 'items',
  initialState: default_items,
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    }
  }
});

export const itemsActions = itemsSlice.actions;

export default itemsSlice;