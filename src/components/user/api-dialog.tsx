import React, { PropsWithChildren } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

function ApiDialog({ children }: PropsWithChildren) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl rounded-2xl bg-[#1D122C] border-none p-0 shadow-[inset_0_0_8px_2px_rgba(179,83,235,0.4),inset_0_0_2px_rgba(255,255,255,0.2)]">
        <div className="px-6 py-4">
          <DialogTitle className="text-lg font-medium text-white">
            API Token
          </DialogTitle>{" "}
          <div className="mt-4 text-sm text-white/80">
            <div>
              Please copy your new API token. For your security, it won&apos;t
              be shown again.
            </div>

            <input
              className="block  bg-white/[6%] text-white border-white/20 focus:border-white/20 focus:ring-white/90 rounded-lg shadow-inner-md mt-4  px-4 py-2 font-mono text-sm w-full break-all"
              type="text"
              readOnly
              autoFocus
              value="tC6JPOFcjrvDBfVfeDxXpMvQnKlDeEa4wbQbFUDte896fc76"
            />
          </div>
        </div>
        <div className="flex flex-row justify-end px-6 py-4 bg-white/[2%] border-t border-white/10 text-end">
          <DialogClose className="cursor-pointer">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
            >
              Close
            </button>
          </DialogClose>
        </div>
        {/* <div className="hidden fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50">
          <div className="fixed inset-0 transform transition-all hidden">
            <div className="absolute inset-0 bg-black opacity-75 backdrop-blur-sm"></div>
          </div>

          <div className="mb-6 bg-[#1D122C] rounded-[20px] overflow-hidden shadow-inner-xl shadow-[#B353EB]/80 ring-inset ring-[1px] ring-white/20 transform transition-all sm:w-full sm:max-w-2xl sm:mx-auto text-white hidden">
            <div className="px-6 py-4">
              <div className="text-lg font-medium text-white">API Token</div>

              <div className="mt-4 text-sm text-white/80">
                <div>
                  Please copy your new API token. For your security, it
                  won&apos;t be shown again.
                </div>

                <input
                  className="mt-1 block w-3/4 bg-white/[6%] text-white border-white/20 focus:border-white/20 focus:ring-white/90 rounded-lg shadow-inner-md px-4 py-2  font-mono text-sm break-all"
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
        </div> */}
      </DialogContent>
    </Dialog>
  );
}

export default ApiDialog;
