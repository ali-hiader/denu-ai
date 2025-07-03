import Navbar from "@/components/homePage/nav-bar";
import Header from "@/components/homePage/header";
import HowItWorks from "@/components/homePage/how-it-works";
import Features from "@/components/homePage/features";
import HomePagePricing from "@/components/homePage/pricing";
import FAQs from "@/components/homePage/faqs";
import HomePageFooter from "@/components/homePage/footer";

function page() {
  return (
    <main className="h-full bg-[#050A14] text-gray-100">
      <Navbar />
      <Header />
      <HowItWorks />
      <Features />
      <HomePagePricing />
      <FAQs />
      <HomePageFooter />
    </main>
  );
}

export default page;
