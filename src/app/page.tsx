"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { addToCart } from "./redux/cartSlice";
import { toggleLike } from "./redux/likeSlice";
export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.items);
  const likedItems = useSelector((state: RootState) => state.like.items);
 return (
    <main className="flex flex-col min-h-screen bg-white">
      <section className="flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase leading-none">
          Elevate Your <span className="text-gray-400">Stride</span>
        </h1>
        <p className="mt-4 text-gray-500 uppercase tracking-[0.3em] text-[10px] font-bold">
          Exclusive Collection 2026
        </p>
        <div className="mt-10">
          <img 
            src="/shoes1.png" 
            alt="Hero Shoe" 
            className="w-full max-w-sm mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
          />
        </div>
      </section>
      <section className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-black uppercase italic">New Arrivals</h2>
          <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">
            {products.length} Items Found
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const isLiked = likedItems.some((item) => item.id === product.id);
            return (
              <div key={product.id} className="relative bg-gray-50 rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all group flex flex-col border border-transparent hover:border-black/5">
                <button 
                  onClick={() => dispatch(toggleLike(product))}
                  className="absolute top-5 right-5 z-10 text-xl hover:scale-125 transition-transform"
                >
                  {isLiked ? "❤️" : "🤍"}
                </button>
                <div className="h-48 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="mt-6 flex-1 text-left">
                  <h3 className="text-lg font-bold text-black truncate">{product.name}</h3>
                  <p className="text-gray-500 font-semibold">${product.price}.00</p>
                </div>
                <div className="flex gap-2 mt-6">
                  <Link href={`/product/${product.id}`} className='flex-1'>
                  <button className="flex-1 bg-white text-black border border-black/10 py-3 rounded-2xl text-[10px] font-bold uppercase hover:bg-gray-100 transition-all">
                    Details
                  </button>
                  </Link>
                  <button 
                    onClick={() => {
                      dispatch(addToCart(product));
                      alert(`${product.name} added to cart! ❤️`);
                    }}
                    className="flex-1 bg-black text-white py-3 rounded-2xl text-[10px] font-bold uppercase hover:bg-gray-800 shadow-md transition-all active:scale-95"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    
    </main>
  );
}