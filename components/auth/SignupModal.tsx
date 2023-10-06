"use client";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

export const SignupModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        <li
          className="hover:bg-gray-200 rounded-md p-2 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          Signup
        </li>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle asChild>
            <div className="flex justify-between items-center">
              <span>Sign up</span>
              <X onClick={() => setOpen(false)} className="cursor-pointer" />
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <form>
              <h1 className="text-lg font-bold">Welcome to Airbnb</h1>
              <div className="mt-5">
                <Label htmlFor="name">Name</Label>
                <Input placeholder="Enter your name" id="name" />
                <span className="text-red-400"></span>
              </div>
              <div className="mt-5">
                <Label htmlFor="email">Email</Label>
                <Input placeholder="Enter your email" id="email" />
                <span className="text-red-400"></span>
              </div>
              <div className="mt-5">
                <Label htmlFor="password">Password</Label>
                <Input placeholder="Enter your password" id="password" />
                <span className="text-red-400"></span>
              </div>
              <div className="mt-5">
                <Label htmlFor="cpassword">Confirm Password</Label>
                <Input placeholder="Confirm your password" id="cpassword" />
                <span className="text-red-400"></span>
              </div>
              <div className="mt-5">
                <Button className="bg-brand w-full">Continue</Button>
              </div>
              <h1 className="text-center my-2 text-xl font-bold"> -- OR --</h1>
              <Button variant="outline" className="w-full">
                <Image
                  src="/images/google.png"
                  height={25}
                  width={25}
                  alt="google_logo"
                  className="mr-5"
                />
                Continue with Google
              </Button>
              <Button variant="outline" className="w-full mt-5">
                <Image
                  src="/images/github.png"
                  height={25}
                  width={25}
                  alt="github_logo"
                  className="mr-5"
                />
                Continue with Github
              </Button>
            </form>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};
