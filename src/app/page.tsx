import Navbar from "@/components/homePage/nav-bar";
import Header from "@/components/homePage/header";
import HowItWorks from "@/components/homePage/how-it-works";
import Features from "@/components/homePage/features";
import Pricing from "@/components/homePage/pricing";
import FAQs from "@/components/homePage/faqs";
import Footer from "@/components/homePage/Footer";

function page() {
  return (
    <main className="h-full bg-[#050A14] text-gray-100">
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
