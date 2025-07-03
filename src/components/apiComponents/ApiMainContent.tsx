import Link from "next/link";
import React from "react";
import ApiTasks from "./ApiTasks";

function ApiMainContent() {
  return (
    <main className="max-w-7xl mx-auto  px-8 sm:px-6 lg:px-12 py-6 space-y-6">
      <section className="bg-white/[2%] sm:px-6 lg:px-8 py-8 rounded-xl">
        <div className="text-center mb-2">
          <h1 className="mb-2 text-xl font-semibold text-red-400">
            Important Notice
          </h1>
          <p className="text-white/60">
            Tasks are automatically deleted 1 hour after generation
          </p>
        </div>

        <div className="rounded-r-lg border-l-4 border-[#B353EB] bg-white/[4%] p-4">
          <h2 className="mb-2 text-lg font-semibold text-white">
            API Benefits
          </h2>
          <p className="mb-3 text-white/60">
            Using our API to generate images costs 50% less than using the
            website. Create your own unique content with ease!
          </p>
          <Link
            href="#"
            className="inline-flex items-center rounded-md border border-transparent bg-[#B353EB] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-[#B353EB]/80 focus:bg-[#B353EB]/80 focus:outline-none focus:ring-2 focus:ring-[#B353EB] focus:ring-offset-2 active:bg-[#B353EB]/90"
          >
            View API Documentation
          </Link>
        </div>

        <ApiTasks />
      </section>
    </main>
  );
}

export default ApiMainContent;
