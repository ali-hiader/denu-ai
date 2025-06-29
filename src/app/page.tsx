import FAQs from "@/components/HomePage/FAQs";
import Features from "@/components/HomePage/Features";
import Footer from "@/components/HomePage/Footer";
import Header from "@/components/HomePage/Header";
import HowItWorks from "@/components/HomePage/HowItWorks";
import Navbar from "@/components/HomePage/Navbar";
import Pricing from "@/components/HomePage/Pricing";
import React from "react";

function page() {
  return (
    <main
      className="h-full bg-[#050A14] text-gray-100"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 120%, rgba(235, 0, 144, 0.1), rgba(0, 0, 0, 0) 50%)",
      }}
    >
      <Navbar />
      <Header />
      <HowItWorks />
      <Features />
      <Pricing />
      <FAQs />
      <Footer />
    </main>
  );
}

export default page;
