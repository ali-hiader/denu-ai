import React, { PropsWithChildren } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import CreditCTA from "./credit-cta";
import CreditItems from "./credit-items";

function CreditsDialog({ children }: PropsWithChildren) {
  return (
    <Dialog>
      <form>
        <DialogTrigger className="flex gap-1.5">{children}</DialogTrigger>
        <DialogContent className="font-quicksand w-[90%] lg:w-2/3 lg:max-w-[460px] h-auto max-h-[90vh]  p-6 bg-gradient-to-b from-gray-950 to-slate-950  rounded-[40px]  shadow-[inset_0px_0px_160px_0px_rgba(179,83,235,0.24)]  outline-2 outline-offset-[-2px] outline-[#a855f7] backdrop-blur-2xl inline-flex flex-col justify-start items-center gap-8">
          <DialogHeader className="self-stretch text-center justify-start w-full">
            <DialogTitle className="text-white text-center text-base font-medium font-sans leading-tight">
              Purchase
              <br />
            </DialogTitle>
            <DialogDescription className="flex flex-col w-full justify-center">
              <span className="text-purple-500 text-2xl font-medium font-sans leading-loose text-center w-full">
                Pro Credits
              </span>

              <div className="text-white text-xs font-medium font-sans leading-none text-center">
                <b>HD</b> without Watermarks!
              </div>
            </DialogDescription>
          </DialogHeader>

          <div className="self-stretch flex flex-col justify-start items-center gap-3 lg:gap-6 overflow-y-auto">
            <CreditItems />
            {/* <div className="self-stretch relative">
              <template x-if="selectedPlan == 'starter'">
                <div className="w-full h-20 absolute bg-gradient-to-br from-purple-500/30 to-fuchsia-500/30 rounded-2xl blur-sm hover:cursor-pointer"></div>
              </template>
            </div> */}
          </div>
          <DialogFooter>
            <CreditCTA />
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default CreditsDialog;
