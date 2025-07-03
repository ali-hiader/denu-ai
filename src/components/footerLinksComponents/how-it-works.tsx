"use client";
import Link from "next/link";
import React from "react";
import FooterLinksImageCarosel from "./image-carosel";

function FooterLinksHowItWorks() {
  return (
    <section
      className="py-20 bg-[#050A14] relative overflow-hidden"
      id="how-it-works"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-[#ff17a1]/5 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-0 h-[300px] w-[300px] bg-[#ff17a1]/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          {/* Tag */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff17a1]/10 mb-4 backdrop-blur-sm">
            <span className="text-sm font-medium text-primary">
              Simple Process
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Transform any photo in just a few simple steps with our advanced AI
            technology
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Steps */}
          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          <div className="flex flex-col space-y-6 justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ff17a1]/20 to-transparent rounded-xl blur-sm opacity-70"></div>
              <div className="relative flex items-start p-6 bg-[#0A0F1A] rounded-xl border border-gray-800">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#ff17a1]/20 text-primary mr-4 shrink-0">
                  <div>📤</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Upload Celebrity Photo
                  </h3>
                  <p className="text-gray-300">
                    Choose any celebrity photo you want to undress
                  </p>
                </div>
              </div>
              <div className="absolute left-6 top-full h-6 w-px bg-gradient-to-b from-[#ff17a1]/40 to-transparent"></div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ff17a1]/20 to-transparent rounded-xl blur-sm opacity-70"></div>
              <div className="relative flex items-start p-6 bg-[#0A0F1A] rounded-xl border border-gray-800">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#ff17a1]/20 text-primary mr-4 shrink-0">
                  <div>✨</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    AI Processing
                  </h3>
                  <p className="text-gray-300">
                    Our AI creates realistic nude versions instantly
                  </p>
                </div>
              </div>
              <div className="absolute left-6 top-full h-6 w-px bg-gradient-to-b from-[#ff17a1]/40 to-transparent"></div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ff17a1]/20 to-transparent rounded-xl blur-sm opacity-70"></div>
              <div className="relative flex items-start p-6 bg-[#0A0F1A] rounded-xl border border-gray-800">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#ff17a1]/20 text-primary mr-4 shrink-0">
                  <div>⬇️</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Download Result
                  </h3>
                  <p className="text-gray-300">
                    Get high-quality celebrity nudes in seconds
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Carosel */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ff17a1]/30 to-[#ff17a1]/30 rounded-xl blur-xl opacity-70"></div>
              <div className="relative bg-[#050A14] rounded-xl p-4 border border-gray-800">
                <div className="relative overflow-hidden rounded-lg w-full">
                  {/* <div className="relative carousel-item block" data-index="0">
                    <div className="relative">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="relative rounded-lg overflow-hidden bg-[#050A14] border border-gray-800 aspect-[3/4]">
                          <Image
                            src={pageData.clothes1}
                            alt="Before transformation"
                            className="w-full h-full object-cover"
                            width={400}
                            height={800}
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-[#050A14]/70 backdrop-blur-sm py-1 px-2 text-xs text-center text-white font-medium">
                            Before
                          </div>
                        </div>
                        <div className="relative rounded-lg overflow-hidden bg-[#050A14] border border-gray-800 aspect-[3/4]">
                          <Image
                            src={pageData.nudes1}
                            alt="After transformation"
                            className="w-full h-full object-cover"
                            width={400}
                            height={800}
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-[#ff17a1]/70 backdrop-blur-sm py-1 px-2 text-xs text-center text-white font-medium">
                            After
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative carousel-item hidden" data-index="1">
                    <div className="relative">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="relative rounded-lg overflow-hidden bg-[#050A14] border border-gray-800 aspect-[3/4]">
                          <Image
                            src={pageData.clothes2}
                            alt="Before transformation"
                            className="w-full h-full object-cover"
                            width={400}
                            height={800}
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-[#050A14]/70 backdrop-blur-sm py-1 px-2 text-xs text-center text-white font-medium">
                            Before
                          </div>
                        </div>
                        <div className="relative rounded-lg overflow-hidden bg-[#050A14] border border-gray-800 aspect-[3/4]">
                          <Image
                            src={pageData.nudes2}
                            alt="After transformation"
                            className="w-full h-full object-cover"
                            width={400}
                            height={800}
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-[#ff17a1]/70 backdrop-blur-sm py-1 px-2 text-xs text-center text-white font-medium">
                            After
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative carousel-item hidden" data-index="2">
                    <div className="relative">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="relative rounded-lg overflow-hidden bg-[#050A14] border border-gray-800 aspect-[3/4]">
                          <Image
                            src={pageData.clothes3}
                            alt="Before transformation"
                            className="w-full h-full object-cover"
                            width={400}
                            height={800}
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-[#050A14]/70 backdrop-blur-sm py-1 px-2 text-xs text-center text-white font-medium">
                            Before
                          </div>
                        </div>
                        <div className="relative rounded-lg overflow-hidden bg-[#050A14] border border-gray-800 aspect-[3/4]">
                          <Image
                            src={pageData.nudes3}
                            alt="After transformation"
                            className="w-full h-full object-cover"
                            width={400}
                            height={800}
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-[#ff17a1]/70 backdrop-blur-sm py-1 px-2 text-xs text-center text-white font-medium">
                            After
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <FooterLinksImageCarosel />
                  <div className="flex justify-center mt-4 space-x-2">
                    <button
                      className="w-2.5 h-2.5 rounded-full bg-gray-600 hover:bg-primary transition-colors carousel-dot"
                      data-index="0"
                      aria-label="View example 1"
                    ></button>
                    <button
                      className="w-2.5 h-2.5 rounded-full bg-gray-600 hover:bg-primary transition-colors carousel-dot"
                      data-index="1"
                      aria-label="View example 2"
                    ></button>
                    <button
                      className="w-2.5 h-2.5 rounded-full bg-gray-600 hover:bg-primary transition-colors carousel-dot"
                      data-index="2"
                      aria-label="View example 3"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/register" className="group relative inline-block">
            <div className="absolute -inset-1 bg-primary rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <button className="relative bg-[#050A14] text-white font-bold py-4 px-8 rounded-full border border-[#ff17a1]/50 flex items-center transition-all">
              <span>Try It Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FooterLinksHowItWorks;
