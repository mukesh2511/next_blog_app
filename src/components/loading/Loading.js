import Image from "next/image";
import React from "react";
import spinner from "public/spinner.gif";

const page = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <Image src={spinner} alt="loading" width={100} height={100} />
        <p>please wait...</p>
      </div>
    </div>
  );
};

export default page;
