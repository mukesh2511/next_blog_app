import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <div>
      <h1 className="mt-5 mb-5 text-xl lg:text-3xl font-bold">
        Choose a Gallary
      </h1>
      <div className="flex flex-col md:flex-row gap-12">
        <Link
          href="/portfolio/illustrations"
          className="port_link border-4 border-[#bbb] rounded-md w-full md:w-[300px] h-[400px] relative bg-[url('/illustration.png')] bg-cover"
        >
          <span className="port_title absolute bottom-3 right-3 text-2xl lg:text-[40px] font-bold">
            Illustrations
          </span>
        </Link>
        <Link
          href="/portfolio/websites"
          className="port_link border-4 border-[#bbb] rounded-md w-full md:w-[300px] h-[400px] relative bg-[url('/websites.jpg')] bg-cover"
        >
          <span className="port_title absolute bottom-3 right-3 text-2xl lg:text-[40px] font-bold">
            Websites
          </span>
        </Link>
        <Link
          href="/portfolio/applications"
          className="port_link border-4 border-[#bbb] rounded-md w-full md:w-[300px] h-[400px] relative bg-[url('/apps.jpg')] bg-cover"
        >
          <span className="port_title absolute bottom-3 right-3 text-2xl lg:text-[40px] font-bold">
            Applications
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
