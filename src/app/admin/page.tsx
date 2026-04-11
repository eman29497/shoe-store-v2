"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productSlice";
export default function AdminPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(), 
      name,
      price: Number(price),
      image: image.startsWith('/') ? image : `/${image}` 
    };
    dispatch(addProduct(newProduct));

    alert("Zabardast! Naya shoe store mein add ho gaya hai. ❤️");
    setName("");
    setPrice("");
    setImage("");
  };

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <div className="flex-1 flex flex-col items-center px-4 py-16">
        <div className="w-full max-w-xl bg-gray-50 rounded-[3rem] p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-black uppercase italic text-black">Admin Panel</h1>
            <div className="h-1 w-12 bg-black mx-auto mt-2"></div>
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-4">Add New Inventory</p>
          </div>
          <form onSubmit={handleAddProduct} className="space-y-6">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 ml-4">Shoe Name</label>
              <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Nike Jordan Blue"
                className="w-full bg-white border border-gray-200 py-4 px-6 rounded-2xl focus:outline-none focus:border-black transition-all text-black"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 ml-4">Price (USD)</label>
              <input 
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="199"
                className="w-full bg-white border border-gray-200 py-4 px-6 rounded-2xl focus:outline-none focus:border-black transition-all text-black"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 ml-4">Image Filename</label>
              <input 
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="shoe5.png"
                className="w-full bg-white border border-gray-200 py-4 px-6 rounded-2xl focus:outline-none focus:border-black transition-all text-black"
                required
              />
              <p className="text-[9px] text-gray-400 mt-2 ml-4 italic">* Make sure the image is in public folder</p>
            </div>
            <button 
              type="submit"
              className="w-full bg-black text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs mt-6 hover:bg-gray-800 transition-all shadow-xl shadow-black/10 active:scale-95"
            >
              Update Store Inventory
            </button>

          </form>
        </div>
      </div>
    </main>
  );
}