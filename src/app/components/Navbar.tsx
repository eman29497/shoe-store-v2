'use client';
import Link from "next/link";
import {usePathname} from 'next/navigation';
export default function Navbar(){
    const pathname = usePathname();
    return(
<div className="  bg-gray-100 ">
<div className="text-black flex font-bold text-3xl justify-between text-center items-center bg-white px-8 py-3  border-b border-gray-500">ShoeStore
<div className="flex font-medium gap-6  text-black text-2xl">
    <Link href='/' className="hover:underline hover:font-bold">Home</Link>
    <Link href='/cart' className="hover:underline hover:font-bold">Cart</Link>
    <Link href='/like' className="hover:underline hover:font-bold">Likes</Link>
    <Link href='/admin' className="hover:underline hover:font-bold">Admin</Link>
</div>
<div className="flex gap-4">
    {pathname !== '/login' && (
        <Link href='/login'>
            <button className="border border-black px-8 py-2 rounded-full text-xs font-bold uppercase">
                Login
            </button>
        </Link>
    )}
{pathname !== '/signup' && (
    <Link href='/signup'>
        <button className="bg-black text-white px-8 py-2 rounded-full text-xs font-bold uppercase shadow-md">
            SignUp
        </button>
    </Link>
)}
</div>

</div>
        </div>
    )
}