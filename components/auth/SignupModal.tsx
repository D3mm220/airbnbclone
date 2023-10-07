"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { RegisterType, registerSchema } from "@/validations/authSchema";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export const SignupModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const supabase = createClientComponentClient();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = async (payload: RegisterType) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: payload.email,
      password: payload.password,
      options: {
        data: {
          name: payload.name,
        },
      },
    });
    setLoading(false);
    if (error) {
      toast.error(error.message, { theme: "colored" });
    } else if (data.user) {
      await supabase.auth.signInWithPassword({
        email: payload.email,
        password: payload.password,
      });
      setOpen(false);
      toast.success("Logged in successfully", { theme: "colored" });
      router.refresh();
    }
  };
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
          <AlertDialogDescription asChild>
            <div>
              <ToastContainer />
              <form onSubmit={handleSubmit(onSubmit)}>
                <ToastContainer />
                <h1 className="text-lg font-bold">Welcome to Airbnb</h1>
                <div className="mt-5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    placeholder="Enter your name"
                    id="name"
                    {...register("name")}
                  />
                  <span className="text-red-400">{errors.name?.message}</span>
                </div>
                <div className="mt-5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    placeholder="Enter your email"
                    id="email"
                    {...register("email")}
                  />
                  <span className="text-red-400">{errors.email?.message}</span>
                </div>
                <div className="mt-5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    placeholder="Enter your password"
                    id="password"
                    type="password"
                    {...register("password")}
                  />
                  <span className="text-red-400">
                    {errors.password?.message}
                  </span>
                </div>
                <div className="mt-5">
                  <Label htmlFor="cpassword">Confirm Password</Label>
                  <Input
                    placeholder="Confirm your password"
                    id="cpassword"
                    type="password"
                    {...register("password_confirmation")}
                  />
                  <span className="text-red-400">
                    {errors.password_confirmation?.message}
                  </span>
                </div>
                <div className="mt-5">
                  <Button className="bg-brand w-full" disabled={loading}>
                    {loading ? "Processing" : "Continue"}
                  </Button>
                </div>
                <h1 className="text-center my-2 text-xl font-bold">
                  {" "}
                  -- OR --
                </h1>
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
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};
