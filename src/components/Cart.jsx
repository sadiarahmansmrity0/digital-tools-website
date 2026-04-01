import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, setCartItems }) => {
  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
        <p className="text-slate-400 font-medium">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm">
      <h3 className="text-xl font-bold text-[#0F172A] mb-6">Your Cart</h3>
      
      <div className="space-y-2">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} onRemove={removeItem} />
        ))}
      </div>

      {/* 🏷️ Total & Checkout */}
      <div className="mt-10 pt-8 border-t border-slate-100">
        <div className="flex justify-between items-center mb-8">
          <span className="text-slate-500 font-semibold text-lg">Total:</span>
          <span className="text-4xl font-black text-[#0F172A]">
            ${totalPrice}
          </span>
        </div>

        <button className="w-full bg-[#7C3AED] text-white py-5 rounded-[1.5rem] font-bold text-lg hover:bg-[#6D28D9] transition-all transform active:scale-[0.98] shadow-2xl shadow-purple-200">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;