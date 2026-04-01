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
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-600 text-lg">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center group p-10 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Step Number*/}
              <span className="absolute top-4 right-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 rounded-full shadow-md">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-24 h-24 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <img src={step.icon} alt={step.title} className="w-10 h-10 object-contain" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;