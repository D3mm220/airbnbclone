import React from "react";
import Image from "next/image";
export const BrandLogo = () => {
  return (
    <div>
      <Image
        src="/images/logo.png"
        width={120}
        height={120}
        alt="logo"
        className="hidden lg:block"
      />
      <Image
        src="/images/logo-sm.png"
        width={90}
        height={90}
        alt="logo"
        className="lg:hidden"
      />
    </div>
  );
};
