"use client";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { toggleLike } from "../redux/likeSlice";
import { addToCart } from "../redux/cartSlice";
export default function LikePage() {
  const dispatch = useDispatch();
  const likedItems = useSelector((state: RootState) => state.like.items);
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <div className="flex-1 flex flex-col items-center px-4 py-16">
        <div className="w-full max-w-2xl bg-gray-50 rounded-[3rem] p-8 md:p-12 shadow-sm border border-gray-100">
          <h1 className="text-3xl font-black uppercase italic mb-10 text-center">Liked Items ❤️</h1>

          {likedItems.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-400 mb-4">You have not liked any shoes yet.</p>
              <Link href="/" className="text-black font-bold underline italic">Explore Shoes</Link>
            </div>
          ) : (
            <div className="space-y-6">
              {likedItems.map((item) => (
                <div key={item.id} className="flex items-center gap-6 bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
                  <div className="w-20 h-20 bg-gray-50 rounded-2xl p-2">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-black">{item.name}</h3>
                    <p className="text-gray-400 text-sm">${item.price}.00</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={() => {
                        dispatch(addToCart(item));
                        alert("Added to cart!");
                      }}
                      className="bg-black text-white px-4 py-2 rounded-xl text-[10px] font-bold uppercase"
                    >
                      Add
                    </button>
                    <button 
                      onClick={() => dispatch(toggleLike(item))}
                      className="text-red-500 text-[10px] font-bold uppercase"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}