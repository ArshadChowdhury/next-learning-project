"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

const BlogDetails = ({ params }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["blog"],
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
    <div className="h-fit w-full md:w-3/5 flex flex-col items-center rounded-md bg-gray-300 p-20 mt-14">
      <h1 className="py-10 font-bold text-xl">{data.title}</h1>
      <div className="my-5">
        Blog Number {params.blogId}
        <div>
          <p className='my-4 text-2xl'>{data.title}</p>
          <p className='text-xl'>{data.body}</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default BlogDetails;
