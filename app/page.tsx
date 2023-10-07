import { MobileNav } from "@/components/base/MobileNav";
import { Navbar } from "@/components/base/Navbar";
import { Categories } from "@/components/common/Categories";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { cookies } from "next/headers";

export default async function Home() {
  return (
    <h1>
      <Navbar />
      <Categories />
    </h1>
  );
}
