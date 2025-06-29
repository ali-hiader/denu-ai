import React from "react";

interface Props {
  title: string;
  description: string;
}

function FAQItem({ title, description }: Props) {
  return (
    <div className="border-b border-gray-700 pb-6">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default FAQItem;
