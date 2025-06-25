import Image from "next/image";
import Link from "next/link";
import React from "react";

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-dark-deeper">
      {" "}
      <div className="container mx-auto px-4">
        {" "}
        <div className="text-center mb-8">
          {" "}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>{" "}
          <p className="text-lg text-gray-300">
            Nudify your images in three simple steps
          </p>{" "}
        </div>{" "}
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto items-center">
          {" "}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
            {" "}
            <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/30">
              {" "}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold border border-primary/20">
                {" "}
                1{" "}
              </div>{" "}
              <div>
                {" "}
                <div className="flex items-center gap-2 mb-1">
                  {" "}
                  <span className="text-xl">📤</span>{" "}
                  <h3 className="text-lg font-bold text-white">Upload Photo</h3>{" "}
                </div>{" "}
                <p className="text-sm text-gray-400">
                  Select any photo you want to undress
                </p>{" "}
              </div>{" "}
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/30">
              {" "}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold border border-primary/20">
                {" "}
                2{" "}
              </div>{" "}
              <div>
                {" "}
                <div className="flex items-center gap-2 mb-1">
                  {" "}
                  <span className="text-xl">✨</span>{" "}
                  <h3 className="text-lg font-bold text-white">AI Magic</h3>{" "}
                </div>{" "}
                <p className="text-sm text-gray-400">
                  Our AI processes your image instantly
                </p>{" "}
              </div>{" "}
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/30">
              {" "}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold border border-primary/20">
                {" "}
                3{" "}
              </div>{" "}
              <div>
                {" "}
                <div className="flex items-center gap-2 mb-1">
                  {" "}
                  <span className="text-xl">⬇️</span>{" "}
                  <h3 className="text-lg font-bold text-white">Download</h3>{" "}
                </div>{" "}
                <p className="text-sm text-gray-400">
                  Get your deepnude image in high quality
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="w-full md:w-1/2 flex items-center">
            {" "}
            <div className="w-full max-w-xs mx-auto">
              {" "}
              <div className="relative">
                {" "}
                <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-xl"></div>{" "}
                <div className="relative">
                  {" "}
                  <div
                    className="relative"
                    data-carousel=""
                    role="region"
                    aria-label="Image gallery"
                  >
                    {" "}
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                      {" "}
                      <div
                        className="absolute inset-0 transition-opacity duration-300 opacity-0 z-0"
                        data-slide=""
                      >
                        {" "}
                        <div
                          className="relative w-full aspect-[3/4] rounded-lg overflow-hidden group"
                          role="img"
                          aria-label="Before and after image comparison"
                          data-astro-cid-fztqauyw=""
                        >
                          {" "}
                          <Image
                            src="/image-2.jpg"
                            alt="Before transformation"
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                            data-astro-cid-fztqauyw=""
                            width={1000}
                            height={1000}
                          />{" "}
                          <div
                            className="absolute inset-0 clip-animation"
                            data-astro-cid-fztqauyw=""
                          >
                            {" "}
                            <Image
                              src="/image-2.jpg"
                              alt="After transformation"
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                              data-astro-cid-fztqauyw=""
                              width={1000}
                              height={1000}
                            />{" "}
                          </div>{" "}
                          <div
                            className="absolute inset-0 pointer-events-none"
                            role="presentation"
                            aria-hidden="true"
                            data-astro-cid-fztqauyw=""
                          >
                            {" "}
                            <div
                              className="absolute top-0 h-full w-1 scanning-line"
                              data-astro-cid-fztqauyw=""
                            >
                              {" "}
                              <div
                                className="h-full w-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-50 blur-[2px]"
                                data-astro-cid-fztqauyw=""
                              ></div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>
                      <div
                        className="absolute inset-0 transition-opacity duration-300 opacity-100 z-10"
                        data-slide=""
                      >
                        {" "}
                        <div
                          className="relative w-full aspect-[3/4] rounded-lg overflow-hidden group"
                          role="img"
                          aria-label="Before and after image comparison"
                          data-astro-cid-fztqauyw=""
                        >
                          {" "}
                          <Image
                            src="/image-2.jpg"
                            alt="Before transformation"
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                            data-astro-cid-fztqauyw=""
                            width={1000}
                            height={1000}
                          />{" "}
                          <div
                            className="absolute inset-0 clip-animation"
                            data-astro-cid-fztqauyw=""
                          >
                            {" "}
                            <Image
                              src="/image-2.jpg"
                              alt="After transformation"
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                              data-astro-cid-fztqauyw=""
                              width={1000}
                              height={1000}
                            />{" "}
                          </div>{" "}
                          <div
                            className="absolute inset-0 pointer-events-none"
                            role="presentation"
                            aria-hidden="true"
                            data-astro-cid-fztqauyw=""
                          >
                            {" "}
                            <div
                              className="absolute top-0 h-full w-1 scanning-line"
                              data-astro-cid-fztqauyw=""
                            >
                              {" "}
                              <div
                                className="h-full w-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-50 blur-[2px]"
                                data-astro-cid-fztqauyw=""
                              ></div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>
                      <div
                        className="absolute inset-0 transition-opacity duration-300 opacity-0 z-0"
                        data-slide=""
                      >
                        {" "}
                        <div
                          className="relative w-full aspect-[3/4] rounded-lg overflow-hidden group"
                          role="img"
                          aria-label="Before and after image comparison"
                          data-astro-cid-fztqauyw=""
                        >
                          {" "}
                          <Image
                            src="/image-2.jpg"
                            alt="Before transformation"
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                            data-astro-cid-fztqauyw=""
                            width={1000}
                            height={1000}
                          />{" "}
                          <div
                            className="absolute inset-0 clip-animation"
                            data-astro-cid-fztqauyw=""
                          >
                            {" "}
                            <Image
                              src="/image-2.jpg"
                              alt="After transformation"
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                              data-astro-cid-fztqauyw=""
                              width={1000}
                              height={1000}
                            />{" "}
                          </div>{" "}
                          <div
                            className="absolute inset-0 pointer-events-none"
                            role="presentation"
                            aria-hidden="true"
                            data-astro-cid-fztqauyw=""
                          >
                            {" "}
                            <div
                              className="absolute top-0 h-full w-1 scanning-line"
                              data-astro-cid-fztqauyw=""
                            >
                              {" "}
                              <div
                                className="h-full w-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-50 blur-[2px]"
                                data-astro-cid-fztqauyw=""
                              ></div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="absolute inset-0 z-20">
                        {" "}
                        <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                          {" "}
                          <button
                            className="p-2 rounded-full bg-gray-800/80 text-white hover:bg-gray-700/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary group pointer-events-auto"
                            data-prev=""
                            aria-label="View previous image"
                          >
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 transform transition-transform group-hover:-translate-x-0.5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              {" "}
                              <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>{" "}
                            </svg>{" "}
                          </button>{" "}
                          <button
                            className="p-2 rounded-full bg-gray-800/80 text-white hover:bg-gray-700/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary group pointer-events-auto"
                            data-next=""
                            aria-label="View next image"
                          >
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 transform transition-transform group-hover:translate-x-0.5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              {" "}
                              <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              ></path>{" "}
                            </svg>{" "}
                          </button>{" "}
                        </div>{" "}
                        <div
                          className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none"
                          role="tablist"
                          aria-label="Image navigation"
                        >
                          {" "}
                          <button
                            className="h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary pointer-events-auto w-4 bg-gray-600"
                            data-dot="0"
                            role="tab"
                            aria-selected="true"
                            aria-label="View image 1"
                          ></button>
                          <button
                            className="h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary pointer-events-auto hover:bg-gray-500 w-8 bg-primary"
                            data-dot="1"
                            role="tab"
                            aria-selected="false"
                            aria-label="View image 2"
                          ></button>
                          <button
                            className="h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary pointer-events-auto hover:bg-gray-500 w-4 bg-gray-600"
                            data-dot="2"
                            role="tab"
                            aria-selected="false"
                            aria-label="View image 3"
                          ></button>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="text-center mt-8">
          {" "}
          <Link
            href="#"
            className="group relative inline-flex items-center justify-center"
          >
            {" "}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-full"></div>{" "}
            <div className="relative flex items-center justify-center text-white font-bold py-3 px-8 rounded-full transition-all duration-300 group-hover:scale-105">
              {" "}
              <span>Try Denu AI Now</span>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {" "}
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>{" "}
              </svg>{" "}
            </div>{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}

export default HowItWorks;
