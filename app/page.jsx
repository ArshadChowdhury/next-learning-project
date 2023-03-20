"use client"

import { Inter } from "next/font/google";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import ViewDetails from "../components/ViewDetails";
<<<<<<< HEAD



=======
>>>>>>> 7c871fe9beaaedb5b5a7b4a67a9396b3973fd9ab

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["albums"],
    queryFn: async () => {
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
    return <div className="my-10 mx-14">Loading...</div>;
  }

<<<<<<< HEAD

    return (
      <>
        <div className="flex items-center justify-center">
          <div className="h-fit w-fit flex flex-col items-center">
            <h1 className="py-10 font-bold text-3xl">Shop</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {data.map(album => (
                <div key={album.id} className="flex justify-between m-3 bg-gray-300 rounded-md">
                  <h1 className="text-xl font-normal p-4 break-words max-w-fit">{album.title}</h1>
                  <ViewDetails href={`/${album.id}`} classStyle={"py-4 px-3 text-gray-900 font-medium underline min-w-fit"} />
                </div>
              ))}
              
            </div>
=======
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="h-fit w-fit flex flex-col items-center">
          <h1 className="py-10 font-bold text-3xl">Shop</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {data.map((album) => (
              <div
                key={album.id}
                className="flex justify-between m-3 bg-gray-300 rounded-md"
              >
                <h1 className="text-xl font-normal p-4 break-words max-w-fit">
                  {album.title}
                </h1>
                <ViewDetails
                  classStyle={
                    "py-4 px-3 text-gray-900 font-medium underline min-w-fit"
                  }
                  href={`/${album.id}`}
                />
              </div>
            ))}
>>>>>>> 7c871fe9beaaedb5b5a7b4a67a9396b3973fd9ab
          </div>
        </div>
      </div>
    </>
  );
}
