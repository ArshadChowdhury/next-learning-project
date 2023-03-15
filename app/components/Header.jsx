import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="hidden bg-gray-400 md:flex md:justify-around py-3">
        <div className="w-1/2">
          <Image href="/react_logo.png" height="20" width="300" alt="No Image" />
        </div>
        <ul className="flex w-1/2 justify-end mr-20">
          <Link href="/">
            <li className="hover:bg-gray-500 hover:text-white px-5 py-2 cursor-pointer rounded-sm">Home</li>
          </Link>

          <Link href="/login">
            <li className="hover:bg-gray-500 hover:text-white  px-5 py-2 cursor-pointer rounded-sm">
              Login
            </li>
          </Link>
          <Link href="/registration">
            <li className="hover:bg-gray-500 hover:text-white  px-5 py-2 cursor-pointer rounded-sm">
              Registration
            </li>
          </Link>
          <Link href="/blog">
            <li className="hover:bg-gray-500 hover:text-white  px-5 py-2 cursor-pointer rounded-sm">Blog</li>
          </Link>
          <Link href="/contact">
            <li className="hover:bg-gray-500 hover:text-white  px-5 py-2 cursor-pointer rounded-sm">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
