"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const user = JSON.parse(savedUser);
      if (user.email === email && user.password === password) {
        alert(`Welcome back, ${user.name}! `);
        router.push("/"); 
      } else {
        alert("Ghalat Email ya Password! Dobara check karein.");
      }
    } else {
      alert("Koi user nahi mila! Pehle signup karein.");
    }
  };
  return (
    <main className="min-h-screen bg-white flex flex-col">      
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-gray-50 rounded-[3rem] p-10 border border-gray-100 shadow-sm">
          <h1 className="text-3xl font-black uppercase italic text-center mb-8">Login</h1>
          <form onSubmit={handleLogin} className="space-y-5">
            <input type="email" placeholder="Email Address" required className="w-full p-4 rounded-2xl border outline-none focus:border-black" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" required className="w-full p-4 rounded-2xl border outline-none focus:border-black" onChange={(e) => setPassword(e.target.value)} />
            <button className="w-full bg-black text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-gray-800">Login Now</button>
          </form>
        </div>
      </div>
    </main>
  );
}