"use client";

import React, { PropsWithChildren, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface Props {
  premission: string | null;
  updatePermission: (index: number, permission: string | null) => void;
  index: number;
}

function PermissionsDialog({
  children,
  premission,
  updatePermission,
  index,
}: PropsWithChildren & Props) {
  const [userPermission, setUserPermission] = useState(premission);

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>{children}</DialogTrigger>
      </form>
      <DialogContent className="sm:max-w-2xl rounded-2xl bg-[#1D122C] border-none p-0 shadow-[inset_0_0_8px_2px_rgba(179,83,235,0.4),inset_0_0_2px_rgba(255,255,255,0.2)]">
        <div className="px-6 py-4">
          <DialogTitle className="text-lg font-medium text-white">
            API Token Permissions
          </DialogTitle>

          <div className="mt-4 text-sm text-white/80">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                  value="generate"
                  checked={userPermission === "on"}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setUserPermission(checked ? "on" : null);
                  }}
                  defaultChecked={premission === "on"}
                />
                <span className="ms-2 text-sm text-gray-600">generate</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-end px-6 py-4 bg-white/[2%] border-t border-white/10 text-end">
          <DialogClose>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
            >
              Cancel
            </button>
          </DialogClose>
          <DialogClose>
            <button
              type="submit"
              onSubmit={() => updatePermission(index, userPermission)}
              className="rounded-lg flex gap-2.5 justify-center items-center relative h-full w-auto  bg-transparent  text-md hover:cursor-pointer text-center bg-gradient-to-b from-[#B353EB]/20 to-[#B353EB]/40 shadow-inner-lg shadow-[#B353EB]/40 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg ms-3"
            >
              <div className="ring-inset ring-[1px] ring-white/20 px-4 py-2 flex gap-2.5 rounded-lg h-full w-full justify-center items-center text-white">
                Save
              </div>
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PermissionsDialog;
