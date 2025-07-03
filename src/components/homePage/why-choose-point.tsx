import React from "react";

interface Props {
  icon: string;
  title: string;
  description: string;
}

function WhyChooseDenuPoint({ icon, title, description }: Props) {
  return (
    <div className="group relative p-6 rounded-xl backdrop-blur-sm">
      <div className="absolute inset-0 bg-gray-800/50 rounded-xl border border-gray-700/30 transition-all duration-300 group-hover:scale-105"></div>
      <div className="absolute -inset-1 bg-[#ff17a1]/5 rounded-xl blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <div className="relative">
        <div className="text-3xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
          {description}
        </p>
      </div>
    </div>
  );
}

export default WhyChooseDenuPoint;
