import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MenuIcon } from "lucide-react";
import { LoginModal } from "../auth/LoginModal";
import { SignupModal } from "../auth/SignupModal";
import { SignOutBtn } from "../common/SignOutBtn";

export const NavMenu = ({ session }: { session: object | undefined }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <MenuIcon />
      </PopoverTrigger>
      <PopoverContent className="mr-6">
        <ul>
          {session !== null ? (
            <>
              <li className="hover:bg-gray-200 rounded-md p-2 cursor-pointer">
                Dashboard
              </li>
              <SignOutBtn />
            </>
          ) : (
            <>
              <LoginModal />
              <SignupModal />
            </>
          )}
        </ul>
      </PopoverContent>
    </Popover>
  );
};
