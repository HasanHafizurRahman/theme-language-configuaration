"use client"
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar({ cartCount }) {
  return (
    <nav className="bg-primary-38 text-white py-4 flex justify-between px-5">
      <div>
        <h2 className="font-bold">My Online Store</h2>
      </div>
      <div>
        <div className="relative pt-1">
          <FaShoppingCart className="text-2xl cursor-pointer" />
          <span className="absolute bottom-4 left-4 bg-primary-19 font-bold text-primary-28 rounded-full h-5 w-5 flex items-center justify-center text-xs">
            {cartCount}
          </span>
        </div>
      </div>
    </nav>
  );
}
