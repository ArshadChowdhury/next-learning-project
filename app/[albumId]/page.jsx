"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const AlbumDetails = ({ params }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["album"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${params.albumId}`
        );
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
    <div className="flex justify-center items-center">
      <div className="h-fit w-full md:w-3/5 flex flex-col items-center rounded-md bg-gray-300 p-20 mt-14">
        <h1 className="py-10 font-bold text-xl">{data.title}</h1>
        <img src="https://picsum.photos/600/300" alt="Some Image" />
        <div className="my-5">
          Album Number {params.albumId}
          <div>
            <p className="my-4 text-2xl">{data.title}</p>
            <p className="text-xl">{data.body}</p>
          </div>
        </div>
        <Link href={`/${params.albumId}/comments`} className="underline">
          Comments
        </Link>
      </div>
    </div>
  );
};

export default AlbumDetails;
