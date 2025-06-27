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
    <>
      <main>
        <Navbar />
        <Header />
        <HowItWorks />
        <Features />
        <Pricing />
        <FAQs />
      </main>
      <Footer />
    </>
  );
}

export default page;
