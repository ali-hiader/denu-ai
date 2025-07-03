"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function LoginPage() {
  const router = useRouter();
  function onLogin() {
    router.push("/dashboard");
  }
  return (
    <div className="font-sans text-gray-900">
      <div className="min-h-screen flex flex-col sm:justify-center sm:items-center pt-2 sm:pt-0 bg-[#0F031F]">
        <Link href="/" className="flex items-center h-fit justify-start">
          <Image
            src="/logo-2.png"
            alt="Logo"
            className="h-auto w-26"
            width={100}
            height={100}
          />{" "}
        </Link>{" "}
        <div className="w-full sm:max-w-md mt-3 p-10 backdrop-blur-[20px] sm:rounded-[40px] sm:bg-white/[3%] sm:shadow-inner-md sm:ring-inset sm:ring-[1px] sm:ring-white/35 overflow-hidden">
          <h2 className="mb-4 text-center text-2xl font-semibold text-white">
            Login
          </h2>

          <form method="POST" action={onLogin}>
            <div>
              <label
                className="block font-medium text-sm text-white"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="py-2 px-3 bg-white/[6%] text-white border-white/20 focus:border-white/20 border border-[rgba(255, 255, 255, 0.2)] focus:ring-white/90 rounded-lg shadow-inner-md mt-1 block w-full"
                id="email"
                type="email"
                name="email"
                required
                autoFocus
              />
            </div>

            <div className="mt-4">
              <label
                className="block font-medium text-sm text-white"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="py-2 px-3 bg-white/[6%] text-white border-white/20 focus:border-white/20  border border-[rgba(255, 255, 255, 0.2)]  focus:ring-white/90 rounded-lg shadow-inner-md mt-1 block w-full"
                id="password"
                type="password"
                name="password"
                required
                autoFocus
              />
            </div>

            <div className="mt-4 block">
              <label htmlFor="remember_me" className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                  id="remember_me"
                  name="remember"
                />
                <span className="ml-2 text-sm text-white">Remember me</span>
              </label>
            </div>

            <div className="mt-4 flex items-center justify-end">
              <Link
                className="rounded-md text-sm text-white/60 underline hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                href="#"
              >
                Forgot your password?
              </Link>

              <button
                type="submit"
                className="rounded-lg flex gap-2.5 justify-center items-center relative h-full w-auto bg-transparent text-md hover:cursor-pointer text-center bg-gradient-to-b from-[#B353EB]/20 to-[#B353EB]/40 shadow-inner-lg shadow-[#B353EB]/40 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg ml-4"
              >
                <div className="ring-inset ring-[1px] ring-white/20 px-4 py-2 flex gap-2.5 rounded-lg h-full w-full justify-center items-center text-white">
                  Login
                </div>
              </button>
            </div>
          </form>

          <div className="space-y-6 mt-6 mb-2">
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink text-white/90 px-6">
                Or Login Via
              </span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <div className="grid gap-4">
              <Link
                className="rounded-lg flex gap-2.5 justify-center items-center relative h-full w-full text-md hover:cursor-pointer text-center bg-white/[2%] "
                href="#"
                style={{
                  boxShadow:
                    "inset 0 2px 4px 0 rgba(179, 83, 235, 0.4), 0 0 0 0 rgba(0, 0, 0, 0.05)",
                }}
              >
                <div className="ring-inset ring-[1px] ring-white/20 px-4 py-2 flex gap-2.5 rounded-lg h-full w-full justify-center items-center">
                  <div className="text-gray-900">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 533.5 544.3"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-6 w-6"
                    >
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      ></path>
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      ></path>
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      ></path>
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-white text-sm font-medium">Google</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center">
            <span className="text-base text-white/80">
              Don&apos;t have an account?
            </span>
            <a
              href="https://use.Denu.app/register"
              className="ml-2 text-base font-semibold text-white transition duration-150 ease-in-out hover:underline focus:underline focus:outline-none"
            >
              Register now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
