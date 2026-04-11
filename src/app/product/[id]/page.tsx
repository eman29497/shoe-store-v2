"use client";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { addToCart } from "../../redux/cartSlice";
export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => 
    state.product.items.find((item) => item.id === Number(id))
  );
  if (!product) {
    return <div className="text-center py-20">Product not found!</div>;
  }
 return (
    <main className="min-h-screen bg-white">
    
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 bg-gray-50 rounded-[3rem] p-10">
          <img src={product.image} alt={product.name} className="w-full hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="flex-1 space-y-8">
          <div>
            <span className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px]">New Collection</span>
            <h1 className="text-5xl font-black uppercase italic mt-2">{product.name}</h1>
            <p className="text-2xl font-bold text-gray-400 mt-2">${product.price}.00</p>
          </div>
          <p className="text-gray-500 leading-relaxed">
            Experience the ultimate comfort and style with our premium footwear. 
            Designed for performance and crafted for the streets.
          </p>

          <div className="flex gap-4">
            <button 
              onClick={() => {
                dispatch(addToCart(product));
                alert("Added to Bag!");
              }}
              className="flex-1 bg-black text-white py-5 rounded-2xl font-bold uppercase tracking-widest shadow-xl hover:bg-gray-800 transition-all"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}