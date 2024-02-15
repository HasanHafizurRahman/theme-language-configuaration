"use client"
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar({ cartCount }) {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div>
        <h1 className="text-xl font-bold">My Online Store</h1>
      </div>
      <div>
        <div className="relative">
          <FaShoppingCart className="text-2xl cursor-pointer" />
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
            {cartCount}
          </span>
        </div>
      </div>
    </nav>
  );
}
