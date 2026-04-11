"use client";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}
interface ProductState {
  items: Product[];
}
const initialState: ProductState = {
  items: [
    { id: 1, name: "Nike Air Max 270", price: 150, image: "/shoes1.png" },
    { id: 2, name: "Adidas Ultra Boost", price: 180, image: "/shoes2.png" },
    { id: 3, name: "Air Jordan 1 Retro", price: 210, image: "/shoes3.png" },
    { id: 4, name: "Puma RS-X Bold", price: 110, image: "/shoes4.png" },
  ],
};
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;