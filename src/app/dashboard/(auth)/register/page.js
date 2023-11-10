"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Register = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      if (name.length <= 0 || email.length <= 0 || password.length <= 0) {
        toast.error("Please fill all the fields", {
          autoClose: 5000,
          position: "top-center",
        });
      } else {
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });
        if (res.status === 201) {
          toast.success("User created Successfully", {
            autoClose: 5000,
            position: "top-center",
          });
          router.push("/dashboard/login?success='Account has been Created'");
        } else if (res.status === 403) {
          toast.error("Email already registered", {
            autoClose: 5000,
            position: "top-center",
          });
        }
      }
    } catch (error) {
      if (error.status == 403) {
        toast.error(error.message, {
          autoClose: 5000,
          position: "top-center",
        });
      } else {
        toast.error("Please fill all the fields", {
          autoClose: 5000,
          position: "top-center",
        });
      }
    }
  };
  return (
    <div className="flex items-center flex-col gap-5">
      <form
        action=""
        className="w-[300px] flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="name"
          className="border-[lightgray] border-2 p-3 outline-none bg-transparent rounded-sm font-semibold"
        />
        <input
          type="email"
          placeholder="email"
          className="border-[lightgray] border-2 p-3 outline-none bg-transparent rounded-sm font-semibold"
        />
        <input
          type="password"
          placeholder="password"
          className="border-[lightgray] border-2 p-3 outline-none bg-transparent rounded-sm font-semibold"
        />
        <button className="bg-[#53c28b] p-3 font-bold text-white rounded-sm ">
          Register
        </button>
      </form>
      {err && <p className="text-red ">Something went wrong</p>}
      <Link href={"/dashboard/login"} className="text-sm">
        Login with an existing Account.{" "}
        <small className="text-red-500">Click Here</small>
      </Link>
    </div>
  );
};

export default Register;
