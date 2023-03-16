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
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <h1 className="py-10 font-bold text-3xl self-center">Blog</h1>
      {data?.map((item) => (
        <div
          key={item.id}
          className="h-fit flex flex-col p-5 my-3 bg-gray-300 mx-5 rounded-md"
        >
          <div className="flex justify-between">
            <h1 className="font-semibold my-2">{item.title}</h1>
            <Link className="my-2 mx-10 text-gray-900 font-bold underline" href={`/blog/${item.id}`}>View Details</Link>
          </div>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
