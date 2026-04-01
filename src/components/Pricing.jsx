import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for getting started",
      price: 0,
      period: "Month",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      buttonText: "Get Started Free",
      popular: false,
    },
    {
      name: "Pro",
      description: "Best for professionals",
      price: 29,
      period: "Month",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      buttonText: "Start Pro Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For teams and businesses",
      price: 99,
      period: "Month",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      buttonText: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section className="bg-white py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#0F172A] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-lg">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-[2rem] p-10 transition-all duration-300 ${
                plan.popular
                  ? "bg-[#7C3AED] text-white shadow-2xl scale-105 z-10"
                  : "bg-[#F8FAFC] border border-gray-100 text-gray-900"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] px-4 py-1 rounded-full text-xs font-bold shadow-sm">
                  Most Popular
                </div>
              )}

              <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-8 ${plan.popular ? "text-purple-100" : "text-gray-500"}`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8 flex items-baseline">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className={`text-lg ml-1 ${plan.popular ? "text-purple-200" : "text-gray-400"}`}>
                  /{plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm font-medium">
                    <svg
                      className={`w-5 h-5 mr-3 flex-shrink-0 ${
                        plan.popular ? "text-white" : "text-green-500"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full py-4 rounded-2xl font-bold text-lg transition-colors ${
                  plan.popular
                    ? "bg-white text-[#7C3AED] hover:bg-gray-100"
                    : "bg-[#7C3AED] text-white hover:bg-[#6D28D9]"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;