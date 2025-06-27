import React from "react";
import CrossIcon from "./icons/cross";
import SearchIcon from "./icons/search";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import ThreeBarsIcon from "./icons/3Bars";

function ApiTasks() {
  return (
    <section className="p-6 rounded-lg">
      <h3 className="mb-4 text-lg font-semibold text-white">Your API Tasks</h3>
      <div className="flex justify-end mb-4">
        <button className="ml-2 rounded-lg flex gap-2.5 justify-center items-center relative h-full w-auto  bg-transparent text-md hover:cursor-pointer text-center bg-gradient-to-b from-[#B353EB]/20 to-[#B353EB]/40 shadow-inner-lg shadow-[#B353EB]/40">
          <div className="ring-inset ring-[1px] ring-white/20 px-4 py-2 flex gap-2.5 rounded-lg h-full w-full justify-center items-center">
            <svg
              className="w-5 h-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              ></path>
            </svg>{" "}
          </div>
        </button>
      </div>

      <div className="rounded-lg">
        <div>
          <div className="flex shrink-0 items-center gap-x-4"></div>
          <div className="fi-ta-header-toolbar flex items-center justify-between gap-x-4 px-4 py-3 sm:px-6 bg-[#221832] divide-y divide-white/10 rounded-t-xl">
            <div></div>
            <div x-id="['input']" className="flex items-center gap-3">
              <label className="sr-only" htmlFor="input-2">
                Search
              </label>

              <label className="fi-input-wrp flex rounded-lg ring-1 min-w-60 transition duration-75 bg-white/5 shadow-[0_0_1px_1px_rgba(255,255,255,0.2)] dark:bg-white/5 focus-within:ring-2 ring-gray-950/10 dark:ring-white/20 focus-within:ring-primary-600 dark:focus-within:ring-primary-500">
                <span className="flex items-center gap-x-3 ps-3 pe-2">
                  <SearchIcon />
                </span>

                <div className=" min-w-0 flex-1">
                  <input
                    className="block w-full border-none outline-none py-1.5 text-base text-gray-950 transition duration-75 placeholder:text-gray-400 focus:ring-0 disabled:text-gray-500 disabled:[-webkit-text-fill-color:theme(colors.gray.500)] disabled:placeholder:[-webkit-text-fill-color:theme(colors.gray.400)] dark:text-white dark:placeholder:text-gray-500 dark:disabled:text-gray-400 dark:disabled:[-webkit-text-fill-color:theme(colors.gray.400)] dark:disabled:placeholder:[-webkit-text-fill-color:theme(colors.gray.500)] sm:text-sm sm:leading-6 bg-white/0 ps-0 pe-3"
                    autoComplete="off"
                    maxLength={1000}
                    placeholder="Search"
                    type="search"
                    id="input-2"
                  />
                </div>
              </label>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="fi-icon-btn relative flex items-center justify-center rounded-lg outline-none transition duration-75 focus-visible:ring-2 -m-2 h-9 w-9 text-gray-400 hover:text-gray-500 focus-visible:ring-primary-600 dark:text-gray-500 dark:hover:text-gray-400 dark:focus-visible:ring-primary-500 fi-color-gray fi-ac-action fi-ac-icon-btn-action">
                    <ThreeBarsIcon />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <div className="absolute z-10 w-full rounded-lg bg-white/10 ring-1 shadow-lg ring-white/40 transition dark:divide-white/5 dark:bg-gray-900 dark:ring-white/10 !max-w-xs">
                    <div className="grid gap-y-4 p-6">
                      <h4 className="text-base font-semibold leading-6 text-white">
                        Columns
                      </h4>
                      <div className="grid grid-cols-2 lg:grid-cols-1 fi-fo-component-ctn gap-6s">
                        <div className="fi-fo-field-wrp">
                          <div className="grid gap-y-2">
                            {" "}
                            <div className="flex items-center gap-x-3 justify-between ">
                              {" "}
                              <label
                                className="fi-fo-field-wrp-label inline-flex items-center gap-x-3"
                                htmlFor="toggledTableColumns.created_at"
                              >
                                <input
                                  type="checkbox"
                                  className="fi-checkbox-input rounded border-none bg-white shadow-sm ring-1 transition duration-75 checked:ring-0 focus:ring-2 focus:ring-offset-0 disabled:pointer-events-none disabled:bg-gray-50 disabled:text-gray-50 disabled:checked:bg-gray-400 disabled:checked:text-gray-400 dark:bg-white/5 dark:disabled:bg-transparent dark:disabled:checked:bg-gray-600 text-primary-600 ring-gray-950/10 focus:ring-primary-600 checked:focus:ring-primary-500/50 dark:text-primary-500 dark:ring-white/20 dark:checked:bg-primary-500 dark:focus:ring-primary-500 dark:checked:focus:ring-primary-400/50 dark:disabled:ring-white/10"
                                  id="toggledTableColumns.created_at"
                                />

                                <span className="text-sm font-medium leading-6 text-white">
                                  Created At
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 lg:grid-cols-1 fi-fo-component-ctn gap-6s">
                        <div className="fi-fo-field-wrp">
                          <div className="grid gap-y-2">
                            {" "}
                            <div className="flex items-center gap-x-3 justify-between ">
                              {" "}
                              <label
                                className="fi-fo-field-wrp-label inline-flex items-center gap-x-3"
                                htmlFor="toggledTableColumns.created_at"
                              >
                                <input
                                  type="checkbox"
                                  className="fi-checkbox-input rounded border-none bg-white shadow-sm ring-1 transition duration-75 checked:ring-0 focus:ring-2 focus:ring-offset-0 disabled:pointer-events-none disabled:bg-gray-50 disabled:text-gray-50 disabled:checked:bg-gray-400 disabled:checked:text-gray-400 dark:bg-white/5 dark:disabled:bg-transparent dark:disabled:checked:bg-gray-600 text-primary-600 ring-gray-950/10 focus:ring-primary-600 checked:focus:ring-primary-500/50 dark:text-primary-500 dark:ring-white/20 dark:checked:bg-primary-500 dark:focus:ring-primary-500 dark:checked:focus:ring-primary-400/50 dark:disabled:ring-white/10"
                                  id="toggledTableColumns.created_at"
                                />

                                <span className="text-sm font-medium leading-6 text-white">
                                  Updated At
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="fi-ta-empty-state px-6 py-12 bg-white/[2%]">
            <div className="fi-ta-empty-state-content mx-auto grid max-w-lg justify-items-center text-center">
              <div className="fi-ta-empty-state-icon-ctn mb-4 rounded-full bg-gray-100 p-3 dark:bg-gray-500/20">
                {" "}
                <CrossIcon />
              </div>

              <h4 className="fi-ta-empty-state-heading text-base font-semibold leading-6 text-white">
                No api tasks
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApiTasks;
