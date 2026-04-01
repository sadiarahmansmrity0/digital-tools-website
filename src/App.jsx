import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ProductCard from './components/ProductCard';
import Pricing from "./components/Pricing";
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/products.json');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        toast.error('Could not load products!');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Sync Cart Count
  useEffect(() => {
    const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalCount);
  }, [cart]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const isItemInCart = prevCart.find(item => item.id === product.id);
      if (isItemInCart) {
        toast.info(`${product.name} quantity increased!`);
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      toast.success(`${product.name} added to cart!`);
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading Premium Tools...</div>;

  return (
    <div className="min-h-screen bg-[#FDFDFF] font-sans">
      <ToastContainer position="top-right" autoClose={2000} limit={3} />

      <Navbar cartCount={cartCount} />

      <Banner />

      <Stats />

      {/* Products Section */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-4">Premium Digital Tools</h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-2xl mb-8 text-center border border-red-100">
            Error: {error}. Please check your JSON file.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
      </main>

      <Pricing />


    </div>
  );
}

export default App;