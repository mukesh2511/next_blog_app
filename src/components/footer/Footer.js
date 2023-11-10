import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center h-12 justify-between">
      <div className="text-sm">&copy; Blog. All rights reserved.</div>
      <div className="flex items-center gap-3">
        <Image
          src={"/1.png"}
          width={15}
          height={15}
          className="opacity-60 cursor-pointer"
          alt="img"
        />
        <Image
          src={"/2.png"}
          width={15}
          height={15}
          className="opacity-60 cursor-pointer"
          alt="img"
        />
        <Image
          src={"/3.png"}
          width={15}
          height={15}
          className="opacity-60 cursor-pointer"
          alt="img"
        />
        <Image
          src={"/4.png"}
          width={15}
          height={15}
          className="opacity-60 cursor-pointer"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Footer;
