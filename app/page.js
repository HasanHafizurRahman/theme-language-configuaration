"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";


// Function to fetch data from the FakeStore API
async function fetchFakeStoreData() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
}

// Function to fetch data from the JSONPlaceholder API
async function fetchJSONPlaceholderData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

export default function Home() {
  const [fakeStoreData, setFakeStoreData] = useState([]);
  const [jsonPlaceholderData, setJsonPlaceholderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    Promise.all([fetchFakeStoreData(), fetchJSONPlaceholderData()])
      .then(([fakeStoreData, jsonPlaceholderData]) => {
        setFakeStoreData(fakeStoreData);
        setJsonPlaceholderData(jsonPlaceholderData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = () => {
    // Increment cart count when user clicks on "Add to Cart" button
    setCartCount((prevCount) => prevCount + 1);
    // Show toast notification
    toast.success("Item added to cart!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
      <>
      <div className="mb-4">
      <Navbar cartCount={cartCount} />
      </div>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

{loading ? (
  <p>Loading...</p>
) : (
  <>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Render products from FakeStore API */}
      {fakeStoreData.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image src={product.image} alt={product.title} width={400} height={200} />
          <div className="p-4">
            <h3 className="font-semibold mb-2">{product.title}</h3>
            <p className="text-primary-34 mb-4 truncate">{product.description}</p>
            <p className="text-primary-26 font-semibold">{product.price}</p>
            <button onClick={handleAddToCart} className="mt-4 flex items-center bg-primary-26 text-white px-4 py-2 rounded-md">
                      <FaShoppingCart className="mr-2" />
                      Add to Cart
                    </button>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-12">
      {/* Render posts from JSONPlaceholder API */}
      {jsonPlaceholderData.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="font-semibold mb-2">{post.title}</h3>
          <p className="text-primary-34">{post.body}</p>
        </div>
      ))}
    </div>
  </>
)}
    </main>
    </>
  );
}

