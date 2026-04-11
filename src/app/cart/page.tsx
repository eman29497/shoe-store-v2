"use client";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../redux/cartSlice";
export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <div className="flex-1 flex flex-col items-center px-4 py-16">
        <div className="w-full max-w-2xl bg-gray-50 rounded-[3rem] p-8 shadow-sm border border-gray-100">
          <h1 className="text-3xl font-black uppercase italic mb-10 text-center">Your Cart</h1>
          {cartItems.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500 mb-4">Your bag is empty! 🛍️</p>
              <Link href="/" className="text-black font-bold underline">Go Shopping</Link>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-6 border-b border-gray-200 pb-8 mb-8">
                  <div className="w-20 h-20 bg-white rounded-2xl p-2 shadow-sm">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>
         <div className="flex-1">
                    <h3 className="font-bold text-black">{item.name}</h3>
                    <p className="text-gray-400 text-sm">${item.price}.00</p>
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center gap-3 bg-white px-3 py-1 rounded-full border">
                        <button onClick={() => dispatch(decrementQuantity(item.id))} className="font-bold text-lg">-</button>
                        <span className="font-bold text-sm">{item.quantity}</span>
                        <button onClick={() => dispatch(incrementQuantity(item.id))} className="font-bold text-lg">+</button>
                      </div>
                      <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-500 text-xs font-bold uppercase">Remove</button>
                    </div>
                  </div>
                  
                  <div className="font-black text-lg">${item.price * item.quantity}</div>
                </div>
              ))}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <div className="flex justify-between text-xl font-black text-black">
                  <span>Total Amount</span>
                  <span>${totalPrice}.00</span>
                </div>
              </div> 
            </>
          )}
        </div>
      </div>
    </main>
  );
}