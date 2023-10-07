"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const SocialBtns = () => {
  const supabase = createClientComponentClient();
  const github = async () => {
    const {} = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "",
      },
    });
  };
  return (
    <div>
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
    </div>
  );
};
