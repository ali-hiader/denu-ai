"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { footerLinksData } from "@/lib/footer-links-data";
import BackgroundColor from "./background-color";

function FooterLinksHeader() {
  const path = usePathname();
  const pageData = footerLinksData.filter((data) => data.link === path)[0];

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-[#050A14] relative overflow-hidden">
      <BackgroundColor />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <div>
            <pageData.heading />
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              {pageData.paragraph}
            </p>{" "}
            {pageData.description && <pageData.description />}
          </div>{" "}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {" "}
            <Link
              href="/register"
              className="cta-button group relative inline-flex items-center justify-center"
              aria-label="Try Celebrity Nudes"
            >
              {" "}
              <span className="relative px-10 py-4 bg-[#050A14] rounded-lg leading-none flex items-center justify-center border border-[#FF0C9E]/30 shadow-[0_0_16px_1px_#FF0C9E] text-white font-bold text-lg">
                {pageData.cta}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-3 transform transition-transform group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  {" "}
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>{" "}
                </svg>{" "}
              </span>{" "}
            </Link>{" "}
            <Link
              href="#how-it-works"
              className="group inline-flex items-center justify-center py-3 px-8 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors"
            >
              {" "}
              <span className="text-white font-medium">Learn More</span>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 text-gray-400 group-hover:text-white transition-colors"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {" "}
                <path
                  fill-rule="evenodd"
                  d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>{" "}
              </svg>{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
        <div className="max-w-4xl mx-auto mt-16">
          {" "}
          <div className="relative">
            {" "}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-xl blur-xl opacity-70"></div>{" "}
            <div className="relative bg-[#0A0F1A] rounded-xl p-5 md:p-6 border border-gray-800">
              {" "}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {" "}
                <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-[#050A14] border border-gray-800">
                  {" "}
                  <Image
                    src={pageData.clothesPic}
                    alt="Original clothed image before using Celebrity Nude Generator with Denu AI"
                    className="w-full h-full object-cover"
                    width={400}
                    height={300}
                    loading="eager"
                  />{" "}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#050A14]/70 backdrop-blur-sm py-2 px-3 text-sm text-center text-white font-medium">
                    Before
                  </div>{" "}
                </div>{" "}
                <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-[#050A14] border border-gray-800">
                  {" "}
                  <Image
                    src={pageData.nudePic}
                    alt="Transformed nude image after using Celebrity Nude Generator with Denu AI"
                    className="w-full h-full object-cover"
                    width={400}
                    height={300}
                  />{" "}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#ff17a1]/70 backdrop-blur-sm py-2 px-3 text-sm text-center text-white font-medium">
                    After
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="mt-10 flex justify-center gap-10 md:gap-16">
            {" "}
            <div className="text-center">
              {" "}
              <p className="text-lg sm:text-xl font-bold text-primary mb-1">
                500k+
              </p>{" "}
              <p className="text-sm text-gray-400">Happy Users</p>{" "}
            </div>{" "}
            <div className="text-center">
              {" "}
              <p className="text-lg sm:text-xl font-bold text-primary mb-1">
                99%
              </p>{" "}
              <p className="text-sm text-gray-400">Success Rate</p>{" "}
            </div>{" "}
            <div className="text-center">
              {" "}
              <p className="text-lg sm:text-xl font-bold text-primary mb-1">
                2M
              </p>{" "}
              <p className="text-sm text-gray-400">Images Generated</p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </section>
  );
}

export default FooterLinksHeader;
