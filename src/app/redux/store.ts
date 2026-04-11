import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import likelistReducer from './likeSlice';
import productReducer from './productSlice';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    like:likelistReducer,
    product:productReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;