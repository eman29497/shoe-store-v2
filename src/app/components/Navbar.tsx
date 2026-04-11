"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">SHOE STORE</Link>
        <div className="hidden md:flex items-center space-x-6 font-medium">
          <Link href="/">Home</Link>
          <Link href="/like">Like</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/admin">Admin</Link>
          <Link href="/login" className="border border-black px-3 py-1 rounded">Login</Link>
          <Link href="/signup" className="bg-black text-white px-3 py-1 rounded">Signup</Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden font-bold">
          {isOpen ? "CLOSE" : "MENU"}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col space-y-4 font-medium">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/like" onClick={() => setIsOpen(false)}>Like</Link>
          <Link href="/cart" onClick={() => setIsOpen(false)}>Cart</Link>
          <Link href="/admin" onClick={() => setIsOpen(false)}>Admin</Link>
          <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
          <Link href="/signup" onClick={() => setIsOpen(false)}>Signup</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;