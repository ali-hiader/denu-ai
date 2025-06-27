import React from "react";
import StaticDiamond from "./icons/static-diamond";
import CreditsDialog from "../dashboardComponents/credits";
import CreditDiamomdIcon from "../dashboardComponents/icons/credit-diamomd";

function CreditsUpgradeNav() {
  return (
    <div className="lg:hidden flex justify-center items-center w-full py-3 bg-white/[4%] ">
      <div className="flex gap-3 items-center">
        <div className="shadow-[inset_0_0_1px_1px_rgba(179,83,235)] px-3 py-2.5 flex gap-1.5 rounded-xl">
          <CreditsDialog>
            <CreditDiamomdIcon />
            <small className="text-sm leading-[14px] text-white ">
              <span className="text-white text-sm font-medium">3 Credits</span>
            </small>
          </CreditsDialog>
        </div>

        {/* Upgrade Link */}
        <div className="rounded-xl px-3 py-2.5 flex gap-1.5 justify-center items-center relative bg-gradient-to-r from-[#b349f5] to-[#de4bea] bg-[linear-gradient(0.25912486890784375deg, #b349f5 0.00%, #de4bea 100.00%)] hover:cursor-pointer flex">
          <StaticDiamond />
          <CreditsDialog>
            <small className="text-sm leading-[14px] text-white">
              <span className="text-white text-sm font-medium">Upgrade</span>
            </small>
          </CreditsDialog>
        </div>
      </div>
    </div>
  );
}

export default CreditsUpgradeNav;
