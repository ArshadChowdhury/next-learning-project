"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

const AlbumTitle = ({ params }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["albumTitle"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${params.albumId}/comments`
        );
        const data = await res.json();
        console.log(data);
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
        <div className="my-10">
          Album Number - {params.albumId}
          {data.map((soloAlbum) => (
            <div
              key={soloAlbum.id}
              className="bg-slate-100 my-3 p-4 rounded-md"
            >
              <p className="text-md">User Name - {soloAlbum.name}</p>
              <p className="text-md">User Email - {soloAlbum.email}</p>
              <p className="text-md my-4">Comment - {soloAlbum.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumTitle;