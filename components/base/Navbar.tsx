import { Search, MenuIcon } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { NavMenu } from "./NavMenu";
import { MobileNav } from "./MobileNav";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 border-b-[1px]">
      <div className="hidden md:block">
        <BrandLogo />
      </div>
      <div className="w-full md:w-auto">
        <div className="hidden md:flex items-center space-x-2 border rounded-3xl p-2">
          <span className="text-sm pl-2">Anywhere</span>
          <span>|</span>
          <span className="text-sm">Any week</span>
          <span>|</span>
          <span className="text-sm  text-gray-400">Add Guest</span>
          <span className="bg-brand text-white p-2 rounded-full">
            <Search width={17} height={17} />
          </span>
        </div>
        <MobileNav />
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <span>Add your home</span>
        <NavMenu />
      </div>
    </div>
  );
};
