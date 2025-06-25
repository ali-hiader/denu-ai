import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-deeper/80 backdrop-blur-sm border-b border-gray-800">
      {" "}
      <div className="container mx-auto px-4">
        {" "}
        <div className="flex items-center justify-between h-16">
          {" "}
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                className="h-8 w-auto"
                width={100}
                height={100}
              />{" "}
            </Link>{" "}
            <nav className="hidden md:flex items-center gap-8">
              {" "}
              <Link
                href="#how-it-works"
                className="text-sm font-semibold text-gray-200 hover:text-white transition-colors"
              >
                {" "}
                How it Works{" "}
              </Link>
              <Link
                href="#features"
                className="text-sm font-semibold text-gray-200 hover:text-white transition-colors"
              >
                {" "}
                Features{" "}
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-semibold text-gray-200 hover:text-white transition-colors"
              >
                {" "}
                Pricing{" "}
              </Link>
              <Link
                href="#faq"
                className="text-sm font-semibold text-gray-200 hover:text-white transition-colors"
              >
                {" "}
                FAQ{" "}
              </Link>{" "}
            </nav>{" "}
          </div>{" "}
          <Link
            href="https://use.n8ked.app/login"
            className="inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-full text-sm font-semibold text-white bg-primary hover:bg-primary-dark transition-all duration-300 hover:scale-105"
          >
            Login
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
}

export default Navbar;
