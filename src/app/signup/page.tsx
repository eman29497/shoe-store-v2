"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
export default function SignupPage() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const router = useRouter();
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData)); 
    alert("Account created successfully! Ab login karein. ❤️");
    router.push("/login"); 
  };
  return (
    <main className="min-h-screen bg-white flex flex-col">    
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-gray-50 rounded-[3rem] p-10 border border-gray-100 shadow-sm">
          <h1 className="text-3xl font-black uppercase italic text-center mb-8">Sign Up</h1>
          <form onSubmit={handleSignup} className="space-y-5">
            <input type="text" placeholder="Full Name" required className="w-full p-4 rounded-2xl border outline-none focus:border-black" onChange={(e) => setFormData({...formData, name: e.target.value})} />
            <input type="email" placeholder="Email Address" required className="w-full p-4 rounded-2xl border outline-none focus:border-black" onChange={(e) => setFormData({...formData, email: e.target.value})} />
            <input type="password" placeholder="Password" required className="w-full p-4 rounded-2xl border outline-none focus:border-black" onChange={(e) => setFormData({...formData, password: e.target.value})} />
            <button className="w-full bg-black text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-gray-800">Create Account</button>
          </form>
        </div>
      </div>
    </main>
  );
}