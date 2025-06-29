import Footer from "@/components/dashboardComponents/footer";
import CreditsUpgradeNav from "@/components/layout-componets/nav-credits-upgrade";
import DashboardNavBar from "@/components/layout-componets/navbar";
import { Toaster } from "@/components/ui/sonner";
import React, { PropsWithChildren } from "react";

function DashBoardLayout({ children }: PropsWithChildren) {
  return (
    <main className="bg-[#0F0320] h-full">
      <DashboardNavBar />
      <CreditsUpgradeNav />
      <section className="bg-[#0F0320] overflow-hidden">{children}</section>
      <Toaster />
      <Footer />
    </main>
  );
}

export default DashBoardLayout;
