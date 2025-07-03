import Link from "next/link";
import React from "react";

function page() {
  return (
    <header className=" shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h2 className="text-2xl mt-10 font-semibold text-white text-left">
          Profile
        </h2>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-1 sm:px-6 lg:px-8 h-full">
        <div className="mx-auto max-w-7xl py-10 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-3 md:gap-6 ">
            <div className="md:col-span-1 flex justify-between">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium text-white">
                  Profile Information
                </h3>

                <p className="mt-1 text-sm text-gray-300">
                  Update your account&apos;s profile information and email
                  address.
                </p>
              </div>

              <div className="px-4 sm:px-0"></div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form>
                <div className="px-4 py-5 backdrop-blur-[20px] bg-white/[2%] sm:p-6 shadow-inner-xl shadow-[#B353EB]/80 ring-inset ring-[1px] ring-white/20 rounded-xl shadow-[inset_0_0_8px_2px_rgba(179,83,235,0.4),inset_0_0_2px_rgba(255,255,255,0.2)]">
                  <div className="grid grid-cols-6 gap-6 text-white">
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        className="block font-medium text-sm text-white"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className="mt-1 block w-3/4 px-4 bg-white/[6%] text-white border-white/20 focus:border-white/20 py-2 rounded-lg shadow-inner-md focus:ring-pink-500 shadow-inner-xl shadow-[#B353EB]/80 ring-inset ring-[1px] ring-white/20 shadow-[inset_0_0_8px_2px_rgba(179,83,235,0.4),inset_0_0_2px_rgba(255,255,255,0.2)]"
                        id="text"
                        type="name"
                        required
                        defaultValue="Ali Haider"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        className="block font-medium text-sm text-white"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="mt-1 block w-3/4 px-4 bg-white/[6%] text-white border-white/20 focus:border-white/20 py-2 rounded-lg shadow-inner-md focus:ring-pink-500 ring-inset ring-[1px] ring-white/20 shadow-[inset_0_0_8px_2px_rgba(179,83,235,0.4),inset_0_0_2px_rgba(255,255,255,0.2)]"
                        id="email"
                        type="email"
                        required
                        defaultValue="ali@example.com"
                      />
                    </div>
                  </div>
                  <div className="flex justify-start mt-4">
                    <div className="text-sm hidden text-white me-3">Saved.</div>

                    <button className="rounded-xl flex gap-2.5 justify-center items-center relative h-full w-auto bg-transparent text-md hover:cursor-pointer text-center bg-gradient-to-b from-[#B353EB]/20 to-[#B353EB]/40 shadow-inner-lg shadow-[#B353EB]/40">
                      <div className="ring-inset ring-[1px] ring-white/20 px-4 py-2 flex gap-2.5 rounded-xl h-full w-full justify-center items-center text-white">
                        Save
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
          <div className="py-8">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>

        <div className="mt-10 sm:mt-0 ">
          <div className="md:grid md:grid-cols-3 md:gap-6 ">
            <div className="md:col-span-1 flex justify-between">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium text-white">Set Password</h3>

                <p className="mt-1 text-sm text-gray-300">
                  Ensure your account is using a long, random password to stay
                  secure.
                </p>
              </div>

              <div className="px-4 sm:px-0"></div>
            </div>

            <div className="mt-5 md:mt-0 md:col-span-2">
              <form>
                <div className="px-4 py-5 backdrop-blur-[20px] bg-white/[2%] sm:p-6 shadow-inner-xl shadow-[#B353EB]/80 ring-inset ring-[1px] ring-white/20 rounded-xl shadow-[inset_0_0_8px_2px_rgba(179,83,235,0.4),inset_0_0_2px_rgba(255,255,255,0.2)]">
                  <div className="grid grid-cols-6 gap-6 text-white">
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        className="block px-4 py-2 font-medium text-sm text-white"
                        htmlFor="password"
                      >
                        New Password
                      </label>
                      <input
                        className="mt-1 block w-3/4 bg-white/[6%] text-white border-white/20 focus:border-white/20 focus:ring-white/90 rounded-lg shadow-inner-md px-4 py-2"
                        id="password"
                        type="password"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        className="block font-medium text-sm text-white"
                        htmlFor="password_confirmation"
                      >
                        Confirm Password
                      </label>
                      <input
                        className="mt-1 block w-3/4 bg-white/[6%] text-white border-white/20 focus:border-white/20 focus:ring-white/90 rounded-lg shadow-inner-md px-4 py-2"
                        id="password_confirmation"
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="flex justify-start mt-4">
                    <div className="text-sm hidden text-white mr-3">
                      Password saved, please refresh.
                    </div>

                    <button
                      type="submit"
                      className="rounded-lg flex gap-2.5 justify-center items-center relative h-full w-auto flex justify-center bg-transparent items-center text-md hover:cursor-pointer text-center bg-gradient-to-b from-[#B353EB]/20 to-[#B353EB]/40 shadow-inner-lg shadow-[#B353EB]/40 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <div className="ring-inset ring-[1px] ring-white/20 px-4 py-2 flex gap-2.5 rounded-lg h-full w-full justify-center items-center text-white">
                        Save
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
          <div className="py-8">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1 flex justify-between">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium text-white">
                  Connected Accounts
                </h3>

                <p className="mt-1 text-sm text-gray-300">
                  Connect your social media accounts to enable Sign In with
                  OAuth.
                </p>
              </div>

              <div className="px-4 sm:px-0"></div>
            </div>

            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="px-4 py-5  bg-white/[2%] sm:p-6 shadow-inner-xl shadow-[#B353EB]/80 ring-inset ring-[1px] ring-white/20 rounded-xl shadow-[inset_0_0_8px_2px_rgba(179,83,235,0.4),inset_0_0_2px_rgba(255,255,255,0.2)]">
                <div className="p-4 bg-red-500/10 text-red-500 border-l-4 border-red-600 rounded font-medium text-sm ">
                  If you feel any of your connected accounts have been
                  compromised, you should disconnect them immediately and change
                  your password.
                </div>

                <div className="space-y-6 mt-6">
                  <div>
                    <div className="pl-3 flex items-center justify-between">
                      <div className="flex items-center">
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

                        <div className="ml-2">
                          <div className="text-sm font-semibold text-white">
                            Google
                          </div>

                          <div className="text-xs text-white">
                            Connected 15 hours ago
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center space-x-6"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="jetstream-modal fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50 pointer-events-none">
                  <div className="fixed inset-0 transform transition-all hidden">
                    <div className="absolute inset-0 bg-black opacity-75 backdrop-blur-sm "></div>
                  </div>

                  <div className="mb-6 bg-[#1D122C] rounded-[20px] overflow-hidden shadow-inner-xl shadow-[#B353EB]/80 ring-inset ring-[1px] ring-white/20 transform transition-all sm:w-full sm:max-w-2xl sm:mx-auto text-white hidden">
                    <div className="px-6 py-4">
                      <div className="text-lg font-medium text-white">
                        Are you sure you want to remove this account?
                      </div>

                      <div className="mt-4 text-sm text-white/80">
                        Please enter your password to confirm you would like to
                        remove this account.
                        <div className="mt-4">
                          <input
                            className="mt-1 block w-3/4 bg-white/[6%] text-white border-white/20 focus:border-white/20 focus:ring-white/90 rounded-lg shadow-inner-md mt-1 block w-3/4 rounded-md border-gray-700 bg-white/5 px-3 py-2 text-white"
                            type="password"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row justify-end px-6 py-4 bg-white/[2%] border-t border-white/10 text-end">
                      <button className="rounded-xl flex gap-2.5 justify-center items-center relative h-full w-auto flex justify-center bg-transparent items-center text-md hover:cursor-pointer text-center bg-white/[2%] shadow-inner-lg shadow-[#B353EB]/40">
                        <div className="ring-inset ring-[1px] ring-white/20 px-4 py-2 flex gap-2.5 rounded-xl h-full w-full justify-center items-center">
                          Cancel
                        </div>
                      </button>

                      <button className="ms-3 rounded-xl flex gap-2.5 justify-center items-center relative h-full w-auto flex justify-center bg-transparent items-center text-md hover:cursor-pointer text-center bg-gradient-to-b from-red-500/20 to-red-500/40 shadow-inner-lg shadow-red-500/40">
                        <div className="ring-inset ring-[1px] ring-white/20 px-4 py-2 flex gap-2.5 rounded-xl h-full w-full justify-center items-center text-white">
                          Remove Account
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
          <div className="py-8">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1 flex justify-between">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium text-white">
                  Telegram Bot Token
                </h3>

                <p className="mt-1 text-sm text-gray-300">
                  Login to @Denuapp_bot with the button below to enable your
                  telegram bot.
                </p>
              </div>

              <div className="px-4 sm:px-0"></div>
            </div>

            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="px-4 py-5  bg-white/[2%] sm:p-6 shadow-inner-xl shadow-[#B353EB]/80 ring-inset ring-[1px] ring-white/20 rounded-xl shadow-[inset_0_0_8px_2px_rgba(179,83,235,0.4),inset_0_0_2px_rgba(255,255,255,0.2)]">
                <div className="max-w-xl text-sm text-white">
                  Click the button below to login to @Denuapp_bot. This will
                  securely connect your account.
                </div>

                <div className="mt-5">
                  <Link
                    href="https://t.me/Denuapp_bot?start=PiawBwdM08W6C6vQQ3pjLneXJGBTyzzr"
                    target="_blank"
                    className="rounded-lg flex gap-2.5 justify-center items-center relative h-full w-auto flex justify-center bg-transparent items-center text-md hover:cursor-pointer text-center bg-gradient-to-b from-[#B353EB]/20 to-[#B353EB]/40 shadow-inner-lg shadow-[#B353EB]/40"
                  >
                    <div className="ring-inset ring-[1px] ring-white/20 px-4 py-2 flex gap-2.5 rounded-lg h-full w-full justify-center items-center text-white">
                      Login with Telegram
                    </div>
                  </Link>
                </div>

                <div className="jetstream-modal  hidden fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50">
                  <div className="fixed inset-0 transform transition-all hidden">
                    <div className="absolute inset-0 bg-black opacity-75 backdrop-blur-sm"></div>
                  </div>

                  <div className="mb-6 bg-[#1D122C] rounded-[20px] overflow-hidden shadow-inner-xl shadow-[#B353EB]/80 ring-inset ring-[1px] ring-white/20 transform transition-all sm:w-full sm:max-w-2xl sm:mx-auto text-white hidden">
                    <div className="px-6 py-4">
                      <div className="text-lg font-medium text-white">
                        Delete Account
                      </div>

                      <div className="mt-4 text-sm text-white/80">
                        Are you sure you want to delete your account? Once your
                        account is deleted, all of its resources and data will
                        be permanently deleted. Please enter your password to
                        confirm you would like to permanently delete your
                        account.
                        <div className="mt-4" x-data="{}">
                          <input
                            className="mt-1 block w-3/4 bg-white/[6%] text-white border-white/20 focus:border-white/20 focus:ring-white/90 rounded-lg shadow-inner-md mt-1 block w-3/4 rounded-md border-gray-700 bg-white/5 px-3 py-2 text-white"
                            type="password"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row justify-end px-6 py-4 bg-white/[2%] border-t border-white/10 text-end">
                      <button className="rounded-lg flex gap-2.5 justify-center items-center relative h-full w-auto flex justify-center bg-transparent items-center text-md hover:cursor-pointer text-center bg-white/[2%] shadow-inner-lg shadow-[#B353EB]/40">
                        <div className="ring-inset ring-[1px] ring-white/20 px-4 py-2 flex gap-2.5 rounded-lg h-full w-full justify-center items-center">
                          Cancel
                        </div>
                      </button>

                      <button className="ms-3 rounded-lg flex gap-2.5 justify-center items-center relative h-full w-auto flex justify-center bg-transparent items-center text-md hover:cursor-pointer text-center bg-gradient-to-b from-red-500/20 to-red-500/40 shadow-inner-lg shadow-red-500/40">
                        <div className="ring-inset ring-[1px] ring-white/20 px-4 py-2 flex gap-2.5 rounded-lg h-full w-full justify-center items-center text-white">
                          Delete Account
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </header>
  );
}

export default page;
