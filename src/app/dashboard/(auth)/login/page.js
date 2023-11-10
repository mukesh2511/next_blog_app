"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Loading from "@/components/loading/Loading";
import { toast } from "react-toastify";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <Loading />;
  }

  if (session.status === "authenticated") {
    return router?.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password })
      .then((response) => {
        toast.success("LoggedIn Successfully", {
          position: "top-right",
          autoClose: 5000,
        });
        router.push("/dashboard");
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
        });
      });
  };

  return (
    <div>
      <div className="flex items-center flex-col gap-5">
        <form
          action=""
          className="w-[300px] flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="email"
            required
            className="border-[lightgray] border-2 p-3 outline-none bg-transparent rounded-sm font-semibold"
          />
          <input
            type="password"
            placeholder="password"
            required
            className="border-[lightgray] border-2 p-3 outline-none bg-transparent rounded-sm font-semibold"
          />
          <button className="bg-[#53c28b] p-3 font-bold text-white rounded-sm">
            SignIn
          </button>
          <button
            onClick={() => signIn("google")}
            className="bg-[#ab4c4c] p-3 font-bold text-white rounded-sm"
          >
            Login with Google
          </button>
        </form>
        <Link href={"/dashboard/register"} className="text-sm">
          Don't have an Account ?.{" "}
          <small className="text-red-500">Click Here</small>
        </Link>
      </div>
    </div>
  );
};

export default Login;
