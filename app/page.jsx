"use client"

import { Inter } from "next/font/google";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";




const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const { data, isLoading } = useQuery({
    queryKey : ["albums"],
    queryFn : async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/albums");
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
    <>
      <div className="flex items-center justify-center">
        <div className="h-fit w-full md:w-3/5 flex flex-col items-center">
          <h1 className="py-10 font-bold text-3xl">Shop Up</h1>
          <div className="self-start">
            {data.map(album => (
              <div key={album.id} className="flex justify-between my-3 bg-gray-300 mx-5 rounded-md">
                <h1 className="text-xl font-semibold my-2 mx-10">{album.title}</h1>
                <Link className="my-2 mx-10 text-gray-900 font-bold underline min-w-fit" href={`/${album.id}`}>View Details</Link>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </>
  );
}
