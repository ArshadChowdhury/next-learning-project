"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

const BlogDetails = ({ params }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${params.blogId}`
        );
        const data = await res.json();
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
    <div className="flex justify-center items-center">
      <div className="h-fit w-full md:w-3/5 flex flex-col items-center rounded-md">
        <h1 className="py-10 font-bold text-xl">{data.title}</h1>
        <div className="">
          Blog Number {params.blogId}
          <div>
            <p>{data.title}</p>
            <p>{data.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
