import AffliateMainContent from "@/components/affiliateComponents/affliateMainContent";
import React from "react";

function AffiliatePage() {
  return (
    <>
      <header className=" shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h2 className="text-2xl mt-10 font-semibold text-white text-center">
            Affiliate Dashboard
          </h2>
        </div>
      </header>
      <AffliateMainContent />
    </>
  );
}

export default AffiliatePage;
