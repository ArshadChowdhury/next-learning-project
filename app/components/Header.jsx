"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";



const Header = () => {


    const linkStyles = {
        style : "hover:bg-white hover:rounded-md hover:text-cyan-600 rounded-sm px-5 py-3 text-white"
    }

    const hamburgerStyles = {
        style : "h-0.5 w-6 my-0.5 bg-gray-800"
    }
    

  return (
    <>
    <div className="hidden">

    </div>
    <button className="flex flex-col absolute right-5 top-5 md:hidden" onClick={() => console.log("Hey")}>
        <div className={hamburgerStyles.style}></div>
        <div className={hamburgerStyles.style}></div>
        <div className={hamburgerStyles.style}></div>
    </button>
      <div className="hidden bg-sky-800 md:flex md:justify-around py-4">
        <Link href="/">
          <div className="">
            <Image
              src="/react_logo.png"
              height="10"
              width="30"
              alt="No Image"
            />
          </div>
        </Link>
        <ul className="flex w-1/2 justify-end">
          <li>
            <Link
              className={linkStyles.style}
              href="/"
            >
              Home{" "}
            </Link>
          </li>

          <li>
            <Link
              className={linkStyles.style}
              href="/login"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className={linkStyles.style}
              href="/registration"
            >
              Registration
            </Link>
          </li>
          <li>
            <Link
              className={linkStyles.style}
              href="/blog"
            >Blog
            </Link>
          </li>
          <li>
          <Link className={linkStyles.style} href="/contact">Contact</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Header;
