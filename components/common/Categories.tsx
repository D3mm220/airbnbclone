import { categories } from "@/config/categories";
import Image from "next/image";
import React from "react";

export const Categories = () => {
  return (
    <div>
      {categories.map((item) => (
        <div>
          <Image src={item.icon} width={40} height={40} alt={item.name} />
        </div>
      ))}
    </div>
  );
};
