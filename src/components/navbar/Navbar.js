"use client";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { signOut, useSession } from "next-auth/react";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";

const Navbar = () => {
  const session = useSession();
  const [toggle, setToggle] = useState(false);
  console.log(session);
  const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "PortFolio", url: "/portfolio" },
    { id: 3, title: "Blog", url: "/blog" },
    { id: 4, title: "About", url: "/about" },
    { id: 5, title: "Contact", url: "/contact" },
    { id: 6, title: "Dashboard", url: "/dashboard" },
  ];
  return (
    <div className="h-24 flex items-center justify-between">
      <Link href={"/"} className="font-bold text-2xl">
        Blog
      </Link>
      <div className="hidden md:flex items-center gap-5">
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className=" md:hidden lg:block p-[5px] cursor-pointer bg-[#c25353] text-white  w-8 rounded-[50%] flex justify-center items-center font-bold">
            {session?.data?.user?.name[0].toUpperCase()}
          </button>
        )}
        {session.status === "authenticated" ? (
          <button
            className="p-[5px] cursor-pointer bg-[#53c28b] text-white rounded-sm"
            onClick={signOut}
          >
            Logout
          </button>
        ) : (
          <Link
            href={"/dashboard/login"}
            className="p-[5px] cursor-pointer bg-[#53c28b] text-white rounded-sm"
          >
            Login
          </Link>
        )}
      </div>
      <div className=" md:hidden flex items-center gap-5 relative">
        <DarkModeToggle />
        {session.status === "authenticated" ? (
          <button className="p-[5px] cursor-pointer bg-[#c25353] text-white  w-8 rounded-[50%] flex justify-center items-center font-bold">
            {session?.data?.user?.name[0].toUpperCase()}
          </button>
        ) : (
          <Link
            href={"/dashboard/login"}
            className="p-[5px] cursor-pointer bg-[#53c28b] text-white rounded-sm"
          >
            Login
          </Link>
        )}
        <MenuIcon
          className="cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        {toggle && (
          <div className="items flex flex-col gap-3 absolute border-2 pt-2 pb-2 pr-5 pl-2 top-10 left-0  w-screen h-screen   font-bold cursor-pointer z-10 bg-[#ffffff] transition-opacity ">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="hover:bg-[#53c38b] hover:text-black p-1 rounded-sm"
              >
                {link.title}
                <hr />
              </Link>
            ))}
            {session.status === "authenticated" && (
              <button
                className="p-[5px] cursor-pointer bg-[#53c28b] mt-2 rounded-sm "
                onClick={signOut}
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
