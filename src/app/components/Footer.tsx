"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
    
        <div className="text-center md:text-left">
          <h2 className="text-xl font-black uppercase italic tracking-tighter">Stride Store</h2>
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em] mt-1">Premium Footwear</p>
        </div>

        
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-500">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <Link href="/cart" className="hover:text-black transition-colors">Cart</Link>
          <Link href="/like" className="hover:text-black transition-colors">Likes</Link>
          <Link href="/admin" className="hover:text-black transition-colors">Admin</Link>
        </div>

    
    

      </div>
    </footer>
  );
}