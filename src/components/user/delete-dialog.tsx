import React, { PropsWithChildren } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface Props {
  deleteFn: (index: number) => void;
  index: number;
}

function DeleteDialog({
  children,
  deleteFn,
  index,
}: PropsWithChildren & Props) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>{children}</DialogTrigger>
      </form>
      <DialogContent className="sm:max-w-2xl rounded-2xl overflow-hidden bg-white border-none p-0 shadow-[inset_0_0_8px_2px_rgba(179,83,235,0.4),inset_0_0_2px_rgba(255,255,255,0.2)]">
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                ></path>
              </svg>
            </div>

            <div className="mt-3 text-center sm:mt-0 sm:ms-4 sm:text-start">
              <DialogTitle className="text-lg font-medium text-gray-900">
                Delete API Token
              </DialogTitle>

              <div className="mt-4 text-sm text-gray-600">
                Are you sure you would like to delete this API token?
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-end px-6 py-4 bg-gray-100 text-end">
          <DialogClose>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
            >
              Cancel
            </button>
          </DialogClose>

          <button
            type="button"
            onClick={() => deleteFn(index)}
            className="inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ms-3"
          >
            Delete
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteDialog;
