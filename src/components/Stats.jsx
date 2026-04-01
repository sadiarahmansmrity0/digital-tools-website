import React from "react";
import userIcon from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

const Steps = () => {
  const steps = [
    {
      number: "01",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
      icon: userIcon,
    },
    {
      number: "02",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs.",
      icon: packageIcon,
    },
    {
      number: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      icon: rocketIcon,
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mb-16">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center p-10 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Step Number */}
              <span className="absolute top-4 right-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 rounded-full shadow-md">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-20 h-20 flex items-center justify-center mb-6 rounded-full bg-purple-50 shadow-inner">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;