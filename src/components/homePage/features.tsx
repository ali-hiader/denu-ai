import React from "react";
import WhyChooseDenuPoint from "./why-choose-point";

function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-[#050A14] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark-deeper/50 to-transparent"></div>{" "}
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          {" "}
          {/* Title -> Why choose denuSAI */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff17a1]/10 text-primary mb-6 backdrop-blur-sm border border-primary/20">
            {" "}
            <span className="text-sm font-semibold">
              Why Choose DenuAI?
            </span>{" "}
          </div>
          {/* Heading */}
          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Experience the Best AI Technology
          </h2>{" "}
          <p className="text-xl text-gray-300">
            Our advanced features make creating stunning transformations simple
            and fast
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <WhyChooseDenuPoint
            icon="🎯"
            title="User-Friendly"
            description="Our intuitive interface allows you to effortlessly generate
                deepnude images in just seconds."
          />
          <WhyChooseDenuPoint
            icon="⚡"
            title="Consistent Quality"
            description="Our advanced AI ensures reliable and high-quality deepnude
                results every time."
          />
          <WhyChooseDenuPoint
            icon="🔒"
            title="Privacy Assured"
            description="Your images are securely processed and immediately deleted
                after generating deepnude images, ensuring your privacy."
          />
          <WhyChooseDenuPoint
            icon="⚡️"
            title="Lightning Speed"
            description="Experience instant results with our fast AI technology,
                generating deepnude images in mere seconds."
          />
          <WhyChooseDenuPoint
            icon="💰"
            title="Cost-Effective"
            description="Our affordable pricing plans make deepnude technology accessible
                to everyone."
          />
          <WhyChooseDenuPoint
            icon="📈"
            title="Scalable Solutions"
            description="Our scalable solutions can handle any volume of deepnude
                generation tasks, ensuring your needs are met."
          />
        </div>{" "}
      </div>{" "}
    </section>
  );
}

export default Features;
