"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import Link from "next/link";

const BlogPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (isLoading) {
    return <div className="my-10 mx-14">Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <h1 className="py-10 font-bold text-3xl self-center">Blog</h1>
      <div className="rounded-lg grid grid-cols-1 md:grid-cols-2">
        {data?.map((item) => (
          <div key={item.id} className="flex justify-between m-3 bg-gray-300 rounded-md">
            <div className="flex flex-col p-4">
            <div className="flex justify-between my-3">
              <h1 className="font-semibold">{item.title}</h1>
              <Link
                className="text-gray-900 font-bold underline min-w-fit"
                href={`/blog/${item.id}`}
              >
                View Details
              </Link>
              </div>
              <p>{item.body}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
