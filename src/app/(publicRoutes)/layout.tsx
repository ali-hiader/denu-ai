import Navbar from "@/components/homePage/nav-bar";
import React, { PropsWithChildren } from "react";

function FooterLinksLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}

export default FooterLinksLayout;
