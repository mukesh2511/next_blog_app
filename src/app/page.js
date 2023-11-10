import Image from "next/image";
import React from "react";
import Hero from "public/hero.png";
import Button from "@/components/button/Button";

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:gap-24 items-center ">
      <div className="flex flex-col gap-5 md:gap-12 flex-1">
        <h1 className="text-4xl lg:text-7xl bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text text-transparent font-[600]">
          Better design for your digital products.
        </h1>
        <p className="text-lg lg:text-2xl font-light">
          Turning your idea into Reality. We bring together the teams from the
          global tech industry.
        </p>

        <Button text={"See Our Works"} url={"/portfolio"} />
      </div>
      <div className="flex-1">
        <Image
          src={Hero}
          className="image1 w-full md:h-[500px] object-contain"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Home;
