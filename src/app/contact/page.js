import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Contact",
  description: "This is a contact page",
};

const Contact = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-12">
        Let's Keep in Touch
      </h1>
      <div className="md:flex md:gap-24 md:items-center">
        <div className="hidden md:block md:flex-1 h-[500px] relative ">
          <Image
            src="/contact.png"
            fill={true}
            className="object-contain image"
            alt="img"
          />
        </div>
        <form className="md:flex-1 flex flex-col justify-center gap-5">
          <input
            type="text"
            placeholder="name"
            className="w-full p-4 bg-transparent text-[#bbb] border-[3px] border-[#bbb] text-xl font-bold outline-none"
          />
          <input
            type="text"
            placeholder="email"
            className=" w-full p-4 bg-transparent text-[#bbb] border-[3px] border-[#bbb] text-xl font-bold outline-none"
          />
          <textarea
            className="w-full  p-4 bg-transparent text-[#bbb] border-[3px] border-[#bbb] text-xl font-bold outline-none"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="message"
          ></textarea>
          <Button url="#" text="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
