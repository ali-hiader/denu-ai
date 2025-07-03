import Link from "next/link";
import React from "react";
import ImageCarousel from "./image-carousel";
import RightArrow from "./icons/right-arrow";

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-[#050A14]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>{" "}
          <p className="text-lg text-gray-300">
            Nudify your images in three simple steps
          </p>{" "}
        </div>
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto items-center">
          {/* Steps */}
          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/30">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ff17a1]/10 text-primary font-bold border border-primary/20">
                1{" "}
              </div>{" "}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">📤</span>{" "}
                  <h3 className="text-lg font-bold text-white">Upload Photo</h3>{" "}
                </div>{" "}
                <p className="text-sm text-gray-400">
                  Select any photo you want to undress
                </p>{" "}
              </div>{" "}
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/30">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ff17a1]/10 text-primary font-bold border border-primary/20">
                2{" "}
              </div>{" "}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">✨</span>{" "}
                  <h3 className="text-lg font-bold text-white">AI Magic</h3>{" "}
                </div>{" "}
                <p className="text-sm text-gray-400">
                  Our AI processes your image instantly
                </p>{" "}
              </div>{" "}
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/30">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ff17a1]/10 text-primary font-bold border border-primary/20">
                3{" "}
              </div>{" "}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">⬇️</span>{" "}
                  <h3 className="text-lg font-bold text-white">Download</h3>{" "}
                </div>{" "}
                <p className="text-sm text-gray-400">
                  Get your deepnude image in high quality
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>

          {/* Images Display and Comparison */}
          <ImageCarousel />
        </div>{" "}
        <div className="text-center mt-8">
          <Link
            href="/register"
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary rounded-full"></div>{" "}
            <div className="relative flex items-center justify-center text-white font-bold py-3 px-8 rounded-full transition-all duration-300 group-hover:scale-105">
              <span>Try Denu AI Now</span> <RightArrow />
            </div>{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}

export default HowItWorks;
