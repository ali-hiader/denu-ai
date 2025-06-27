import React from "react";

function page() {
  return (
    <>
      <header className=" shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h2 className="text-2xl mt-10 font-semibold text-white text-left">
            API Tokens
          </h2>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-1 sm:px-6 lg:px-8 h-full">
        <div>
          <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
            <div>
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1 flex justify-between">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium text-white">
                      Create API Token
                    </h3>

                    <p className="mt-1 text-sm text-gray-300">
                      API tokens allow third-party services to authenticate with
                      our application on your behalf.
                    </p>
                  </div>

                  <div className="px-4 sm:px-0"></div>
                </div>

                <div className="mt-5 md:mt-0 md:col-span-2 ">
                  <form>
                    <div className="px-4 py-5 backdrop-blur-[20px] bg-white/[2%] sm:p-6 shadow-inner-xl shadow-[#B353EB]/80 ring-inset ring-[1px] ring-white/20 rounded-xl shadow-[inset_0_0_8px_2px_rgba(179,83,235,0.4),inset_0_0_2px_rgba(255,255,255,0.2)]">
                      <div className="grid grid-cols-6 gap-6 text-white">
                        <div className="col-span-6 sm:col-span-4">
                          <label
                            className="block font-medium text-sm text-white"
                            htmlFor="name"
                          >
                            Token Name
                          </label>
                          <input
                            className="mt-1 block w-3/4 bg-white/[6%] text-white border-white/20 focus:border-white/20 focus:ring-white/90 rounded-lg shadow-inner-md mt-1 block w-full"
                            id="name"
                            type="text"
                          />
                        </div>

                        <div className="col-span-6">
                          <label
                            className="block font-medium text-sm text-white"
                            htmlFor="permissions"
                          >
                            Permissions
                          </label>

                          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                                value="generate"
                              />
                              <span className="ms-2 text-sm text-gray-600">
                                generate
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-start mt-4">
                        <div className="hidden text-sm text-white me-3">
                          Created.
                        </div>

                        <button
                          type="submit"
                          className="rounded-lg flex gap-2.5 justify-center items-center relative h-full w-auto flex justify-center bg-transparent items-center text-md hover:cursor-pointer text-center bg-gradient-to-b from-[#B353EB]/20 to-[#B353EB]/40 shadow-inner-lg shadow-[#B353EB]/40 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg"
                        >
                          <div className="ring-inset ring-[1px] ring-white/20 px-4 py-2 flex gap-2.5 rounded-lg h-full w-full justify-center items-center text-white">
                            Create
                          </div>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="hidden fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50">
                <div className="fixed inset-0 transform transition-all hidden">
                  <div className="absolute inset-0 bg-black opacity-75 backdrop-blur-sm"></div>
                </div>

                <div className="mb-6 bg-[#1D122C] rounded-[20px] overflow-hidden shadow-inner-xl shadow-[#B353EB]/80 ring-inset ring-[1px] ring-white/20 transform transition-all sm:w-full sm:max-w-2xl sm:mx-auto text-white hidden">
                  <div className="px-6 py-4">
                    <div className="text-lg font-medium text-white">
                      API Token
                    </div>

                    <div className="mt-4 text-sm text-white/80">
                      <div>
                        Please copy your new API token. For your security, it
                        won&apos;t be shown again.
                      </div>

                      <input
                        className="mt-1 block w-3/4 bg-white/[6%] text-white border-white/20 focus:border-white/20 focus:ring-white/90 rounded-lg shadow-inner-md mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500 w-full break-all"
                        x-ref="plaintextToken"
                        type="text"
                        readOnly
                        autoFocus
                        spellCheck
                      />
                    </div>
                  </div>

                  <div className="flex flex-row justify-end px-6 py-4 bg-white/[2%] border-t border-white/10 text-end">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>

              <div className="jetstream-modal fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50 pointer-events-none">
                <div className="fixed inset-0 transform transition-all hidden">
                  <div className="absolute inset-0 bg-black opacity-75 backdrop-blur-sm"></div>
                </div>

                <div
                  x-show="show"
                  className="mb-6 bg-[#1D122C] rounded-[20px] overflow-hidden shadow-inner-xl shadow-[#B353EB]/80 ring-inset ring-[1px] ring-white/20 transform transition-all sm:w-full sm:max-w-2xl sm:mx-auto text-white hidden"
                >
                  <div className="px-6 py-4">
                    <div className="text-lg font-medium text-white">
                      API Token Permissions
                    </div>

                    <div className="mt-4 text-sm text-white/80">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                            value="generate"
                          />
                          <span className="ms-2 text-sm text-gray-600">
                            generate
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row justify-end px-6 py-4 bg-white/[2%] border-t border-white/10 text-end">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="rounded-lg flex gap-2.5 justify-center items-center relative h-full w-auto flex justify-center bg-transparent items-center text-md hover:cursor-pointer text-center bg-gradient-to-b from-[#B353EB]/20 to-[#B353EB]/40 shadow-inner-lg shadow-[#B353EB]/40 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg ms-3"
                    >
                      <div className="ring-inset ring-[1px] ring-white/20 px-4 py-2 flex gap-2.5 rounded-lg h-full w-full justify-center items-center text-white">
                        Save
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="hidden jetstream-modal fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50 pointer-events-none">
                <div
                  x-show="show"
                  className="fixed inset-0 transform transition-all hidden"
                >
                  <div className="absolute inset-0 bg-black opacity-75 backdrop-blur-sm"></div>
                </div>

                <div
                  x-show="show"
                  className="hidden mb-6 bg-[#1D122C] rounded-[20px] overflow-hidden shadow-inner-xl shadow-[#B353EB]/80 ring-inset ring-[1px] ring-white/20 transform transition-all sm:w-full sm:max-w-2xl sm:mx-auto text-white"
                >
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          className="h-6 w-6 text-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          ></path>
                        </svg>
                      </div>

                      <div className="mt-3 text-center sm:mt-0 sm:ms-4 sm:text-start">
                        <h3 className="text-lg font-medium text-gray-900">
                          Delete API Token
                        </h3>

                        <div className="mt-4 text-sm text-gray-600">
                          Are you sure you would like to delete this API token?
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row justify-end px-6 py-4 bg-gray-100 text-end">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      className="inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ms-3"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
