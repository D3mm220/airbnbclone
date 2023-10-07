import { Search, SlidersHorizontal } from "lucide-react";
import React from "react";

export const MobileNav = () => {
  return (
    <div className="m-3 md:hidden">
      <div className="flex justify-between items-center border rounded-3xl px-3 py-1">
        <div className="flex items-center">
          <Search />
          <div className="flex flex-col ml-5">
            <span className="tewt-sm font-semibold">Anywhere</span>
            <span className="tewt-sm">Any week . Add guest</span>
          </div>
        </div>
        <SlidersHorizontal />
      </div>
    </div>
  );
};
