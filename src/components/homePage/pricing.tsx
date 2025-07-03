import Link from "next/link";
import React from "react";

function HomePagePricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0A0F1A]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* Pricing Tag */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff17a1]/10 text-primary mb-6 backdrop-blur-sm border border-primary/20">
            <span className="text-sm font-semibold">Simple Pricing</span>
          </div>

          {/* Heading */}
          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-300">
            No hidden fees. No subscriptions.
            <br className="hidden sm:block" /> Pay only for what you use.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Tier */}
          <div className="relative group">
            <div className="relative p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] z-10 bg-gray-800/50 border border-gray-700/30 backdrop-blur-sm">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-white">Free</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-xl">🙂</span>
                  <span>Medium Quality</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-xl">😞</span> <span>Watermarks</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-xl">⏳</span> <span>Slow Queue</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-xl">🔄</span>
                  <span>3 Free Credits</span>
                </li>
              </ul>
              <div className="relative">
                <Link
                  href="/register"
                  className="relative block w-full text-center py-3 px-6 rounded-full font-bold transition-all duration-300 bg-gray-700 text-white hover:bg-gray-600 hover:scale-[1.02]"
                >
                  Start Free
                </Link>
              </div>
            </div>
          </div>
          {/* Pro Tier */}
          <div className="relative group">
            <div className="relative p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] z-10 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
              <div className="absolute -top-3 right-4 px-4 py-1 bg-white text-primary text-sm font-semibold rounded-full shadow-lg">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-white">$0.20</span>
                  <span className="text-gray-400">per image</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-xl">😍</span>
                  <span>Excellent Quality</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-xl">👀</span> <span>No Watermarks</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-xl">⚡️</span> <span>Fast Queue</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-xl">🎯</span>
                  <span>Priority Support</span>
                </li>
              </ul>
              <div className="relative">
                <Link
                  href="/register"
                  className="relative block w-full text-center py-3 px-6 rounded-full font-bold transition-all duration-300 bg-primary text-white hover:bg-primary-dark hover:scale-[1.02]"
                >
                  Go Pro
                </Link>
              </div>
            </div>
            <div className="absolute -inset-1 bg-[#ff17a1]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
          {/* API Tier */}
          <div className="relative group">
            <div className="relative p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] z-10 bg-gray-800/50 border border-gray-700/30 backdrop-blur-sm">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">API</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-white">$0.10</span>
                  <span className="text-gray-400">per image</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-xl">😍</span>
                  <span>Excellent Quality</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-xl">👀</span> <span>No Watermarks</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-xl">⚡️</span> <span>Fast Queue</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-xl">💰</span>
                  <span>Cheapest Option</span>
                </li>
              </ul>
              <div className="relative">
                <Link
                  href="/register"
                  className="relative block w-full text-center py-3 px-6 rounded-full font-bold transition-all duration-300 bg-gray-700 text-white hover:bg-gray-600 hover:scale-[1.02]"
                >
                  Get API Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePagePricing;
