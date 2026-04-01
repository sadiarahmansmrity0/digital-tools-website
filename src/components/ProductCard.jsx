import React from 'react';
 
import writingIcon from "../assets/products/writing_2327400 1.png";
import designIcon from "../assets/products/design-tool.png";
import assetIcon from "../assets/products/portfolio.png";
import automationIcon from "../assets/products/operation.png";
import socialIcon from "../assets/products/social-media.png";
import cartIcon from "../assets/products/shopping-cart.png";

const ProductCard = ({ product, onAddToCart }) => {
  
  const getIcon = (iconName) => {
    if (iconName.includes("writing")) return writingIcon;
    if (iconName.includes("design")) return designIcon;
    if (iconName.includes("portfolio")) return assetIcon;
    if (iconName.includes("operation")) return automationIcon;
    if (iconName.includes("social")) return socialIcon;
    return cartIcon;
  };

  const getBadgeStyle = (type) => {
    switch (type) {
      case "best-seller": return "bg-[#FEF3C7] text-[#D97706]";
      case "popular": return "bg-[#E0E7FF] text-[#4F46E5]";
      case "new": return "bg-[#DCFCE7] text-[#16A34A]";
      default: return "hidden";
    }
  };

  return (
    <div className="relative bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
      {/* Badge */}
      {product.tag && (
        <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getBadgeStyle(product.tagType)}`}>
          {product.tag}
        </div>
      )}

      {/* Icon */}
      <div className="mb-6 w-14 h-14 flex items-center justify-center bg-[#F8FAFC] rounded-2xl">
        <img src={getIcon(product.icon)} alt="" className="w-10 h-10 object-contain" />
      </div>

      <h3 className="text-xl font-bold text-[#0F172A] mb-2">{product.name}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{product.description}</p>

      <div className="mb-6 flex items-baseline gap-1">
        <span className="text-2xl font-bold text-[#0F172A]">${product.price}</span>
        <span className="text-slate-400 text-xs font-medium capitalize">/{product.period}</span>
      </div>

      <ul className="space-y-3 mb-8">
        {product.features?.map((f, i) => (
          <li key={i} className="flex items-center text-sm text-slate-600 font-medium">
            <svg className="w-4 h-4 text-[#22C55E] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <button 
        onClick={() => onAddToCart(product)}
        className="w-full bg-[#7C3AED] text-white py-4 rounded-2xl font-bold hover:bg-[#6D28D9] transition-all shadow-lg shadow-purple-100"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;