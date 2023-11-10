"use client";
import Error from "next/error";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loading from "@/components/loading/Loading";

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/posts", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const jsonData = await res.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className="flex flex-col md:flex-row gap-12 items-center mt-12 mb-12"
          key={item._id}
        >
          <div className="imgContainer w-[400px] h-[250px] relative">
            <Image src={item.img} alt="image" layout="fill" />
          </div>
          <div className="content">
            <h1 className="font-bold text-2xl">{item.title}</h1>
            <p>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
