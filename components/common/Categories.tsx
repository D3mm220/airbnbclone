import { categories } from "@/config/categories";
import Image from "next/image";
import React from "react";

export const Categories = () => {
  return (
    <div className="flex items-center justify-center space-x-8 whitespace-nowrap px-10 my-3 overflow-x-auto pb-4">
      {categories.map((item) => (
        <div className="flex items-center flex-col">
          <Image src={item.icon} width={40} height={40} alt={item.name} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};
