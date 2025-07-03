import React from "react";
import { BeforeAfterRevealCard } from "./before-after-reveal-card";
import Link from "next/link";
import RightArrow from "./icons/right-arrow";
import TelegramIcon from "./icons/telegram";
import ArrowDown from "./icons/arrow-down";

function Header() {
  return (
    <header className="relative min-h-[100svh] bg-gradient-to-br from-[#050A14] via-dark to-[#050A14] overflow-hidden pt-18">
      {/* Pink effect from right */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#ff17a1]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-8 -left-8 w-96 h-96 bg-[#ff17a1]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Main content */}
      <section className="container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 py-12 md:py-0 min-h-[calc(100svh-4rem)]">
          <div className="flex-1 text-center md:text-left">
            <div className="max-w-2xl mx-auto md:mx-0 md:pr-8">
              {/* AI-Powered Technology tag */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff17a1]/10 text-primary mb-6 backdrop-blur-sm border border-primary/20">
                <span className="text-xs md:text-sm font-semibold">
                  ✨ AI-Powered Technology
                </span>{" "}
              </div>{" "}
              {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
              {/* main header */}
              {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-[1]">
                Undress images with{" "}
                <span className="bg-clip-text text-transparent bg-primary">
                  Denu
                </span>{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-white">
                  AI
                </span>{" "}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Experience the future of Nudes with our advanced deepnude AI
                technology.{" "}
              </p>{" "}
              {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
              {/* Links */}
              {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center sm:items-start">
                <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
                  <Link
                    href="/register"
                    className="group relative inline-block w-full sm:w-auto"
                  >
                    <div className="absolute inset-0 bg-primary hover:bg-primary-dark rounded-full transition-colors"></div>{" "}
                    <div className="relative flex items-center justify-center text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                      <span>Undress Now!</span> <RightArrow />
                    </div>{" "}
                  </Link>{" "}
                  <span className="text-sm text-gray-400 mt-2">
                    ✨ 3 free nudes included
                  </span>{" "}
                </div>{" "}
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block self-center sm:self-start w-full sm:w-auto"
                >
                  <div className="absolute inset-0 border border-gray-600 group-hover:border-gray-400 rounded-full transition-colors backdrop-blur-sm"></div>{" "}
                  <div className="relative flex items-center justify-center text-gray-300 group-hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105">
                    <TelegramIcon /> <span>Telegram Bot</span>{" "}
                  </div>{" "}
                </Link>{" "}
                <Link
                  href="#how-it-works"
                  className="group relative inline-block self-center sm:self-start w-full sm:w-auto"
                >
                  <div className="absolute inset-0 border border-gray-600 group-hover:border-gray-400 rounded-full transition-colors backdrop-blur-sm"></div>{" "}
                  <div className="relative flex items-center justify-center text-gray-300 group-hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105">
                    <span>Learn More</span> <ArrowDown />{" "}
                  </div>{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
            {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
            {/* Stats for Desktop */}
            {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
            <div className="hidden md:block mt-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl backdrop-blur-sm border border-gray-700/30 transition-all duration-300 group-hover:scale-105"></div>{" "}
                  <div className="absolute -inset-1 bg-[#ff17a1]/5 rounded-xl blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>{" "}
                  <div className="relative p-4 text-center">
                    <div className="text-2xl mb-2">👥</div>{" "}
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                      <span className="relative">
                        +450k{" "}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>{" "}
                      </span>{" "}
                    </div>{" "}
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      Users{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl backdrop-blur-sm border border-gray-700/30 transition-all duration-300 group-hover:scale-105"></div>{" "}
                  <div className="absolute -inset-1 bg-[#ff17a1]/5 rounded-xl blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>{" "}
                  <div className="relative p-4 text-center">
                    <div className="text-2xl mb-2">🖼️</div>{" "}
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                      <span className="relative">
                        +2M{" "}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>{" "}
                      </span>{" "}
                    </div>{" "}
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      Images{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl backdrop-blur-sm border border-gray-700/30 transition-all duration-300 group-hover:scale-105"></div>{" "}
                  <div className="absolute -inset-1 bg-[#ff17a1]/5 rounded-xl blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>{" "}
                  <div className="relative p-4 text-center">
                    <div className="text-2xl mb-2">⚡</div>{" "}
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                      <span className="relative">
                        99.95%{" "}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>{" "}
                      </span>{" "}
                    </div>{" "}
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      Uptime{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* Image Comparison */}
          <BeforeAfterRevealCard
            beforeSrc="/clothes0.avif"
            afterSrc="/nude0.avif"
          />
          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          {/* Stats for mobile screens */}
          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          <div className="md:hidden w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl backdrop-blur-sm border border-gray-700/30 transition-all duration-300 group-hover:scale-105"></div>{" "}
                <div className="absolute -inset-1 bg-[#ff17a1]/5 rounded-xl blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>{" "}
                <div className="relative p-4 text-center">
                  <div className="text-2xl mb-2">👥</div>{" "}
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                    <span className="relative">
                      +450k{" "}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Users{" "}
                  </div>{" "}
                </div>{" "}
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl backdrop-blur-sm border border-gray-700/30 transition-all duration-300 group-hover:scale-105"></div>{" "}
                <div className="absolute -inset-1 bg-[#ff17a1]/5 rounded-xl blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>{" "}
                <div className="relative p-4 text-center">
                  <div className="text-2xl mb-2">🖼️</div>{" "}
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                    <span className="relative">
                      +2M{" "}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Images{" "}
                  </div>{" "}
                </div>{" "}
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl backdrop-blur-sm border border-gray-700/30 transition-all duration-300 group-hover:scale-105"></div>{" "}
                <div className="absolute -inset-1 bg-[#ff17a1]/5 rounded-xl blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>{" "}
                <div className="relative p-4 text-center">
                  <div className="text-2xl mb-2">⚡</div>{" "}
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                    <span className="relative">
                      99.95%{" "}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Uptime{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
    </header>
  );
}

export default Header;
