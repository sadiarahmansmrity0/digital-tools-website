import React from 'react';
import { HiOutlineTrash } from "react-icons/hi";

// Importing icons for the cart
import writingIcon from "../assets/products/writing_2327400 1.png";
import designIcon from "../assets/products/design-tool.png";
import assetIcon from "../assets/products/portfolio.png";
import automationIcon from "../assets/products/operation.png";
import socialIcon from "../assets/products/social-media.png";
import cartIcon from "../assets/products/shopping-cart.png";

const CartItem = ({ item, onRemove }) => {
  const getIcon = (iconName) => {
    if (iconName.includes("writing")) return writingIcon;
    if (iconName.includes("design")) return designIcon;
    if (iconName.includes("portfolio")) return assetIcon;
    if (iconName.includes("operation")) return automationIcon;
    if (iconName.includes("social")) return socialIcon;
    return cartIcon;
  };

  return (
    <div className="flex items-center justify-between p-6 border-b border-slate-50 last:border-0">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center p-3">
          <img src={getIcon(item.icon)} alt={item.name} className="w-full h-full object-contain" />
        </div>
        <div>
          <h4 className="font-bold text-[#0F172A]">{item.name}</h4>
          <p className="text-slate-500 text-sm">${item.price} x {item.quantity}</p>
        </div>
      </div>
      
      <button 
        onClick={() => onRemove(item.id, item.name)}
        className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors"
      >
        <HiOutlineTrash size={20} />
      </button>
    </div>
  );
};

export default CartItem;
