"use client";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice"; // Yahan se import kiya
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
export default function CheckoutButton({ cartItems }: { cartItems: CartItem[] }) {
  const dispatch = useDispatch();

  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });
      const data = await response.json();
      if (data.url) {
        dispatch(clearCart()); 
        window.location.href = data.url;
      } else {
        console.error("Checkout URL missing!");
      }
    } catch (error) {
      console.error("Checkout Failed:", error);
    }
  };
  return (
    <button
      onClick={handleCheckout}
    className=' bg-black text-white py-2 px-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-gray-800'
    >
      Proceed to Checkout
    </button>
  );
}