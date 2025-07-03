import Image from "next/image";
import Link from "next/link";

import NavItem from "./nav-item";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050A14]/80 backdrop-blur-sm border-b border-gray-800">
      <section className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              className="h-8 w-auto"
              width={100}
              height={100}
            />{" "}
          </Link>
          {/* Main Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavItem href="#how-it-works" name="How it Works" />
            <NavItem href="#features" name="Features" />
            <NavItem href="#pricing" name="Pricing" />
            <NavItem href="#faq" name="FAQ" />
          </div>
        </div>

        {/* Login Link */}
        <Link
          href="/login"
          className="inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-full text-sm font-semibold text-white bg-primary hover:bg-primary-dark transition-all duration-300 hover:scale-105"
        >
          Login
        </Link>
      </section>
    </nav>
  );
}

export default Navbar;
