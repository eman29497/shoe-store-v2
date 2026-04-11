"use client";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LikeItem {
  id: number;
  name: string;
  price: number;
  image: string;
}
const initialState: { items: LikeItem[] } = { items: [] };

const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<LikeItem>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index >= 0) {
        state.items.splice(index, 1); 
      } else {
        state.items.push(action.payload); 
      }
    }
  }
});
export const { toggleLike } = likeSlice.actions;
export default likeSlice.reducer;