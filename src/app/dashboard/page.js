"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import Image from "next/image";
import Loading from "@/components/loading/Loading";
import { toast } from "react-toastify";
import Link from "next/link";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );
  console.log(data);

  if (session.status === "loading") {
    return <Loading />;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      if (
        title.length <= 0 ||
        desc.length <= 0 ||
        img.length <= 0 ||
        content.length <= 0
      ) {
        toast.error("Please fill out the fields", {
          position: "top-center",
          autoClose: 5000,
        });
      } else {
        await fetch("/api/posts", {
          method: "POST",
          body: JSON.stringify({
            title,
            desc,
            img,
            content,
            username: session.data.user.name,
          }),
        });
        mutate();
        e.target.reset();
        toast.success("Post created successfully", {
          position: "top-center",
          autoClose: 5000,
        });
      }
    } catch (err) {
      toast.error(
        { error },
        {
          position: "top-center",
          autoClose: 5000,
        }
      );
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className="flex flex-col-reverse md:flex-row gap-[100px] ">
        <div className="  posts flex-1 ">
          <h1 className="text-2xl font-bold">Your posts</h1>
          {isLoading ? (
            <Loading />
          ) : data.length === 0 ? (
            <p className="font-bold ">Create a post to display</p>
          ) : (
            data?.map((post) => (
              <Link href={`/blog/${post._id}`}>
                <div
                  className=" flex items-center justify-between mt-12 mb-12 "
                  key={post._id}
                >
                  <div className=" w-[200px] h-[200px] relative ">
                    <Image
                      className="object-cover rounded-md"
                      src={post.img}
                      alt={"image"}
                      layout="fill"
                    />
                  </div>
                  <h2>{post.title}</h2>
                  <span
                    className="cursor-pointer text-red-500 font-bold"
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              </Link>
            ))
          )}
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
          <h1 className="text-2xl font-bold">Add New Post</h1>
          <input
            type="text"
            placeholder="Title"
            className="bg-transparent  border-[3px] border-[#bbb]  font-bold outline-none p-2 rounded-sm text-gray-500"
          />
          <input
            type="text"
            placeholder="Desc"
            className="bg-transparent text-gray-500 border-[3px] border-[#bbb]  font-bold outline-none p-2 rounded-sm"
          />
          <input
            type="text"
            placeholder="Image"
            className="bg-transparent text-gray-500  border-[3px] border-[#bbb]  font-bold outline-none p-2 rounded-sm"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Content"
            className="bg-transparent text-gray-500 border-[3px] border-[#bbb]  font-bold outline-none p-2 rounded-sm"
          ></textarea>
          <button className="bg-[#85d8b0] p-3 rounded-sm font-bold text-white text-lg">
            Create Post
          </button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
