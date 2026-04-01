import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import ProductCard from './components/ProductCard';
import CartItem from './components/CartItem';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('products');
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalCount);
    localStorage.setItem('digiToolsCart', JSON.stringify(cart));
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

  const removeFromCart = (id, name) => {
    setCart(prev => prev.filter(item => item.id !== id));
    toast.warning(`${name} removed!`);
  };

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading Premium Tools...</div>;

  return (
    <div className="min-h-screen bg-[#FDFDFF] font-sans">
      <ToastContainer position="top-right" autoClose={2000} limit={3} />
      <Navbar cartCount={cartCount} />
      <Banner />
      <Stats />

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

        <div className="flex justify-center mb-12 gap-4">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-10 py-3 rounded-full font-bold transition-all ${activeTab === 'products' ? 'bg-[#7C3AED] text-white shadow-lg' : 'bg-white text-slate-600 border border-slate-200 hover:border-purple-300'}`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('cart')}
            className={`px-10 py-3 rounded-full font-bold transition-all ${activeTab === 'cart' ? 'bg-[#7C3AED] text-white shadow-lg' : 'bg-white text-slate-600 border border-slate-200 hover:border-purple-300'}`}
          >
            Cart ({cartCount})
          </button>
        </div>

        {activeTab === 'products' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {products.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        )}

        {activeTab === 'cart' && (
          <div className="max-w-3xl mx-auto">
            {cart.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-[2.5rem] border border-dashed border-slate-200">
                <p className="text-slate-400 font-medium">Your cart is empty</p>
              </div>
            ) : (
              <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm">
                <div className="space-y-4 mb-10">
                  {cart.map(item => (
                    <CartItem key={item.id} item={item} onRemove={removeFromCart} />
                  ))}
                </div>
                <div className="mt-10 pt-8 border-t border-slate-100">
                  <div className="flex justify-between items-end mb-8">
                    <div>
                      <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Order Summary</span>
                      <p className="text-slate-500 font-semibold text-lg mt-1">Total Amount:</p>
                    </div>
                    <span className="text-5xl font-black text-[#0F172A] tracking-tighter">
                      ${totalPrice}
                    </span>
                  </div>
                  <button
                    onClick={() => toast.success("Proceeding to payment...")}
                    className="w-full bg-[#7C3AED] text-white py-5 rounded-2xl font-extrabold text-lg hover:bg-[#6D28D9] transition-all transform active:scale-[0.98] shadow-2xl shadow-purple-200"
                  >
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <Steps />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;