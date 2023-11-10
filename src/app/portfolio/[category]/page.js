import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (category) => {
  const data = items[category];
  if (data) {
    return data;
  } else {
    return notFound();
  }
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div>
      <h1 className="text-2xl text-[#53c28b] font-bold ">{params.category}</h1>
      {data.map((item) => (
        <div
          className="flex flex-col md:flex-row gap-12 mt-12 mb-24 md:odd:flex-row-reverse"
          key={item.id}
        >
          <div className="content md:flex-1 flex flex-col gap-5 justify-center">
            <h1 className="text-4xl md:text-[50px]">{item.title}</h1>
            <p className="text:xl md:text-[20px]">{item.desc}</p>
            <Button text="See More" url={"#"} />
          </div>
          <div className="imgContainer md:flex-1 h-[250px] sm:h-[500px] relative">
            <Image
              className="object-cover"
              src={item.image}
              alt="img"
              fill="true"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
