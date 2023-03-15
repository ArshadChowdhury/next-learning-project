import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {


    const linkStyles = {
        style : "hover:bg-gray-500 hover:text-white cursor-pointer rounded-sm px-5 py-2"
    }


  return (
    <>
      <div className="hidden bg-gray-400 md:flex md:justify-around py-4">
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
        <ul className="flex w-1/2 justify-end mr-10">
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
