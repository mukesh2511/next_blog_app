import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
};
export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    desc: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex md:flex-1 flex-col gap-10">
          <h1 className="text-3xl font-bold ">{data.title}</h1>
          <p className="">{data.desc}</p>
          <div className="author flex gap-2 items-center">
            <Image
              src={data.img}
              width={40}
              height={40}
              className="rounded-[50%] object-cover"
              alt="img"
            />
            <span>{data.username}</span>
          </div>
        </div>
        <div className="md:flex-1 h-[300px] relative">
          <Image
            src={data.img}
            fill="true"
            className="object-cover"
            alt="img"
          />
        </div>
      </div>
      <div>
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
