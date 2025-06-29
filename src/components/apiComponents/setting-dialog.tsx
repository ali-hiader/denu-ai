import React, { PropsWithChildren } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import Link from "next/link";

function SettingDialog({ children }: PropsWithChildren) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-5xl bg-[#1D122C] border-none p-0 shadow-[inset_0_0_8px_2px_rgba(179,83,235,0.4),inset_0_0_2px_rgba(255,255,255,0.2)]">
          <div className="px-6 py-4">
            <div className="text-lg font-medium text-white">Webhook URL</div>

            <div className="mt-4 text-sm text-white/80">
              <p className="mb-4 text-md text-white/80">
                You can check the webhook url docs{" "}
                <Link
                  href="#"
                  className="text-[#B353EB] hover:text-pink-500"
                  target="_blank"
                >
                  here
                </Link>
              </p>

              <label
                className="fi-fo-field-wrp-label inline-flex items-center gap-x-3 "
                htmlFor="webhook"
              >
                <span className="text-sm font-medium leading-6 text-white dark:text-white">
                  Webhook URL
                  <sup className="text-danger-600 dark:text-danger-400 font-medium">
                    *
                  </sup>
                </span>
              </label>

              <div className="fi-input-wrp-input min-w-0 flex-1 mt-3 shadow-[0_0_1px_1px_rgba(255,255,255,0.2)] rounded-lg">
                <input
                  className="fi-input block w-full border-none py-1.5 text-base text-gray-950 transition duration-75 placeholder:text-gray-400 focus:ring-0 disabled:text-gray-500 disabled:[-webkit-text-fill-color:theme(colors.gray.500)] disabled:placeholder:[-webkit-text-fill-color:theme(colors.gray.400)] dark:text-white dark:placeholder:text-gray-500 dark:disabled:text-gray-400 dark:disabled:[-webkit-text-fill-color:theme(colors.gray.400)] dark:disabled:placeholder:[-webkit-text-fill-color:theme(colors.gray.500)] sm:text-sm sm:leading-6 bg-white/5 ps-3 pe-3"
                  required
                  id="webhook"
                />
              </div>

              <label
                className="fi-fo-field-wrp-label inline-flex items-center gap-x-3 mt-5"
                htmlFor="secret"
              >
                <span className="text-sm font-medium leading-6 text-white">
                  Secret
                </span>
              </label>

              <div className="grid auto-cols-fr gap-y-2 mt-3 shadow-[0_0_1px_1px_rgba(255,255,255,0.2)] rounded-lg">
                <div className="fi-input-wrp flex rounded-lg shadow-sm ring-1 transition duration-75 fi-disabled bg-white/5 ring-gray-950/10 dark:ring-white/10 fi-fo-text-input overflow-hidden">
                  <div className="fi-input-wrp-input min-w-0 flex-1">
                    <input
                      className="fi-input block w-full border-none py-1.5 text-base text-gray-950 transition duration-75 placeholder:text-gray-400 focus:ring-0 disabled:text-gray-500 disabled:[-webkit-text-fill-color:theme(colors.gray.500)] disabled:placeholder:[-webkit-text-fill-color:theme(colors.gray.400)] dark:text-white dark:placeholder:text-gray-500 dark:disabled:text-gray-400 dark:disabled:[-webkit-text-fill-color:theme(colors.gray.400)] dark:disabled:placeholder:[-webkit-text-fill-color:theme(colors.gray.500)] sm:text-sm sm:leading-6 bg-white/0 ps-3 pe-3"
                      disabled
                      id="secret"
                      type="text"
                    />
                  </div>

                  <div className="fi-input-wrp-suffix flex items-center gap-x-3 pe-3 border-s border-gray-200 ps-3 dark:border-white/10">
                    <div className="flex items-center gap-3">
                      <button
                        x-data="{}"
                        x-tooltip="{
                content: 'Regenerate Secret',
                theme: $store.theme,
            }"
                        className="fi-icon-btn relative flex items-center justify-center rounded-lg outline-none transition duration-75 focus-visible:ring-2 -m-1.5 h-8 w-8 fi-color-custom text-custom-500 hover:text-custom-600 focus-visible:ring-custom-600 dark:text-custom-400 dark:hover:text-custom-300 dark:focus-visible:ring-custom-500 fi-color-primary fi-ac-action fi-ac-icon-btn-action"
                        type="button"
                      >
                        <span className="sr-only">Regenerate secret</span>

                        <svg
                          className="fi-icon-btn-icon h-5 w-5"
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
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                          ></path>
                        </svg>

                        {/* <svg
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
                        </svg> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}

          <div className="flex flex-row justify-end px-6 py-4 bg-white/[2%] border-t border-white/10 text-end">
            <div className="flex justify-between w-full">
              <DialogClose>
                <button className="rounded-lg flex gap-2.5 justify-center items-center relative h-full w-auto text-md hover:cursor-pointer text-center bg-white/[2%] shadow-inner-lg shadow-[#B353EB]/40">
                  <div className="ring-inset ring-[1px] ring-white/20 px-4 py-2 flex gap-2.5 rounded-lg h-full w-full justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                    Cancel
                  </div>
                </button>
              </DialogClose>
              <button className="ms-3 rounded-lg flex gap-2.5 justify-center items-center relative h-full w-auto bg-transparent text-md hover:cursor-pointer text-center bg-gradient-to-b from-[#B353EB]/20 to-[#B353EB]/40 shadow-inner-lg shadow-[#B353EB]/40">
                <div className="ring-inset ring-[1px] ring-white/20 px-4 py-2 flex gap-2.5 rounded-lg h-full w-full justify-center items-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  Save Webhook URL
                </div>
              </button>
            </div>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default SettingDialog;
