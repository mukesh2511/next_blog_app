import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="w-full h-[300px] relative">
        <Image
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          className="object-cover grayscale"
          alt="Img"
        />
        <div className="absolute bottom-5 left-5 bg-[#53c28b] p-2">
          <h1 className="text-xl font-bold">Digital Storytellers</h1>
          <h2 className="text-base font-bold">
            Handcrafting award winning digital experience
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-24 ">
        <div className="left flex-1 mt-12 flex flex-col gap-7">
          <h1 className="text-2xl font-bold ">Who Are We?</h1>
          <p className="text-lg text-justify font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quam
            temporibus debitis rerum magni quo vel quasi assumenda, sint
            quisquam incidunt
            <br />
            <br />
            ducimus natus dolorum alias ipsa cupiditate numquam, amet sequi,
            odio sed pariatur! Provident odio velit placeat illum molestias
            cumque. Nihil suscipit vel, blanditiis magnam assumenda vero.
            <br />
            <br />
            beatae saepe provident id reiciendis praesentium. Magni recusandae
            hic quia suscipit! Consequuntur dicta doloremque earum nihil labore
            harum aliquam quae quis sint
          </p>
        </div>
        <div className="right flex-1 mt-12 flex flex-col gap-7">
          <h1 className="text-2xl font-bold ">What We Do?</h1>
          <p className="text-lg text-justify font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            porro inventore reprehenderit, quas soluta est tenetur hic
            voluptatum similique velit, laudantium officia natus a culpa!
            <br />
            <br />
            - Creative Illustations
            <br />
            <br />
            - Dynamic Websites <br />
            <br />- Fast and Handy Mobile Apps
            <br />
            <br />
          </p>
          <Button text={"Contact"} url={"/contact"} />
        </div>
      </div>
    </div>
  );
};

export default About;
