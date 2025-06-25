import FAQs from "@/components/layoutComponents/faqs";
import Features from "@/components/layoutComponents/features";
import Footer from "@/components/layoutComponents/footer";
import Header from "@/components/layoutComponents/header";
import HowItWorks from "@/components/layoutComponents/howItWorks";
import Pricing from "@/components/layoutComponents/pricing";
import React from "react";

function page() {
  return (
    <>
      <main>
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
