"use client";

import React, { useState } from "react";
import CrossIcon from "./icons/cross";
import SearchIcon from "./icons/search";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import ThreeBarsIcon from "./icons/3Bars";
import CustomCheckbox from "./checkbox";
import SettingDialog from "./setting-dialog";
import SettingIcon from "./icons/setting";

function ApiTasks() {
  const [inputValue, setInputValue] = useState("");
  return (
    <section className="p-6 rounded-lg">
      <h3 className="mb-4 text-lg font-semibold text-white">Your API Tasks</h3>
      <div className="flex justify-end mb-4">
        <SettingDialog>
          <button className="ml-2 rounded-lg flex gap-2.5 justify-center items-center relative h-full w-auto  bg-transparent text-md hover:cursor-pointer text-center bg-gradient-to-b from-[#B353EB]/20 to-[#B353EB]/40 shadow-inner-lg shadow-[#B353EB]/40">
            <div className="ring-inset ring-[1px] ring-white/20 px-4 py-2 flex gap-2.5 rounded-lg h-full w-full justify-center items-center">
              <SettingIcon />
            </div>
          </button>
        </SettingDialog>
      </div>

      <div className="rounded-lg">
        <div>
          <div className="flex shrink-0 items-center gap-x-4"></div>
          <div className="fi-ta-header-toolbar flex items-center justify-between gap-x-4 px-4 py-3 sm:px-6 bg-[#221832] divide-y divide-white/10 rounded-t-xl ring-1 ring-white/10">
            <div></div>
            <div x-id="['input']" className="flex items-center gap-3">
              <label className="sr-only" htmlFor="input-2">
                Search
              </label>

              <label className="fi-input-wrp flex rounded-lg ring-1 sm:min-w-60 transition duration-75 bg-white/5 shadow-[0_0_1px_1px_rgba(255,255,255,0.2)] dark:bg-white/5 focus-within:ring-2 ring-gray-950/10 dark:ring-white/20 focus-within:ring-[#d97706] dark:focus-within:ring-primary-500">
                <span className="flex items-center gap-x-3 ps-3 pe-2">
                  <SearchIcon />
                </span>

                <div className=" min-w-0 w-full flex-1 pointer-events-none">
                  <input
                    className="block w-full border-none outline-none py-1.5 text-base text-white transition duration-75  placeholder:text-gray-400 focus:ring-0 disabled:text-gray-500 disabled:[-webkit-text-fill-color:theme(colors.gray.500)] disabled:placeholder:[-webkit-text-fill-color:theme(colors.gray.400)] dark:text-white dark:placeholder:text-gray-500 dark:disabled:text-gray-400 dark:disabled:[-webkit-text-fill-color:theme(colors.gray.400)] dark:disabled:placeholder:[-webkit-text-fill-color:theme(colors.gray.500)] sm:text-sm sm:leading-6 bg-white/0 ps-0 pe-3"
                    autoComplete="off"
                    maxLength={1000}
                    placeholder="Search"
                    type="search"
                    id="input-2"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                  />
                </div>
              </label>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="fi-icon-btn relative flex items-center justify-center rounded-lg outline-none transition duration-75 focus-visible:ring-2 -m-2 h-9 w-9 text-gray-400 hover:text-gray-500 focus-visible:ring-primary-600 dark:text-gray-500 dark:hover:text-gray-400 dark:focus-visible:ring-primary-500 fi-color-gray fi-ac-action fi-ac-icon-btn-action">
                    <ThreeBarsIcon />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 z-[100]" align="end">
                  <div className="absolute z-10 w-full rounded-lg bg-white/10 ring-1 shadow-lg ring-white/40 transition dark:bg-gray-900 dark:ring-white/10 ">
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
                              <CustomCheckbox
                                name="Created At"
                                checkboxName="created"
                              />
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
                              <CustomCheckbox
                                name="Updated At"
                                checkboxName="created"
                              />
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
          {inputValue.length !== 0 && (
            <div className="fi-ta-filter-indicators flex items-start justify-between gap-x-3 bg-gray-50 px-3 py-1.5 dark:bg-white/5 sm:px-6 h-fit">
              <div className="flex gap-x-3 gap-y-1 sm:flex-row h-fit">
                <span className="whitespace-nowrap text-sm font-medium leading-6 text-gray-700 dark:text-gray-200">
                  Active filters
                </span>

                <div className="flex flex-wrap gap-1.5">
                  <span className="fi-badge flex items-center justify-center gap-x-1 rounded-md text-xs font-medium ring-1 ring-inset px-2 min-w-[theme(spacing.6)] py-1 fi-color-custom bg-[#fffbeb] text-[#d97706] ring-[#d97706]/10 dark:bg-custom-400/10 dark:text-custom-400 dark:ring-custom-400/30 fi-color-primary">
                    <span className="grid">
                      <span className="truncate">Search: {inputValue}</span>
                    </span>

                    <button
                      type="button"
                      onClick={() => setInputValue("")}
                      className="fi-badge-delete-button -my-1 -me-2 -ms-1 flex items-center justify-center p-1 outline-none transition duration-75 text-custom-700/50 hover:text-custom-700/75 focus-visible:text-custom-700/75 dark:text-custom-300/50 dark:hover:text-custom-300/75 dark:focus-visible:text-custom-300/75"
                    >
                      <svg
                        className="h-3.5 w-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"></path>
                      </svg>

                      <span className="sr-only">Remove filter</span>
                    </button>
                  </span>
                </div>
              </div>

              {/* <div className="mt-0.5">
              <button>
                <svg
                  className="fi-icon-btn-icon h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"></path>
                </svg>

                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-spin fi-icon-btn-icon h-5 w-5"
                >
                  <path
                    clip-rule="evenodd"
                    d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    fill-rule="evenodd"
                    fill="currentColor"
                    opacity="0.2"
                  ></path>
                  <path
                    d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div> */}
            </div>
          )}
          <div className="fi-ta-empty-state px-6 py-12 bg-[#1E122E] ring-1 ring-white/10 rounded-b-xl">
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
