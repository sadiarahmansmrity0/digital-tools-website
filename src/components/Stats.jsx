import React from "react";

const Stats = () => {
  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "200+", label: "Premium Tools" },
    { number: "4.9", label: "Rating" },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-3xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/30 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="py-10">
                {/* Number */}
                <div className="text-3xl font-extrabold text-white mb-1">
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-white/80 text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;