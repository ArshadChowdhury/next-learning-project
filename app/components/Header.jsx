"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);

  const linkStyles = {
    style:
      "hover:bg-white hover:rounded-md hover:text-cyan-600 rounded-sm px-5 py-3 text-white",
  };

  const hamburgerStyles = {
    style: "h-0.5 w-6 my-0.5 bg-gray-800",
  };

  const hamburgerOnStyles = {
    style: "hidden",
  };

  return (
    <>
      {hamburger && (
        <div className="bg-gray-900 p-10 w-screen z-50 fixed -right-300 flex flex-col text-white">
          <button className="absolute right-5 top-5" onClick={()=> setHamburger(!hamburger)}>X</button>
          <ul>
            <li onClick={()=> setHamburger(!hamburger)} className="m-4"> 
              <Link href="/">
                Home
              </Link>
            </li>
            <li onClick={()=> setHamburger(!hamburger)} className="m-4">
              <Link href="/login">
                Login
              </Link>
            </li>
            <li onClick={()=> setHamburger(!hamburger)} className="m-4">
              <Link href="/registration">
                Registration
              </Link>
            </li>
            <li onClick={()=> setHamburger(!hamburger)} className="m-4">
              <Link href="/blog">
                Blog
              </Link>
            </li>
            <li onClick={()=> setHamburger(!hamburger)} className="m-4">
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
      <button
        className="flex flex-col absolute right-5 top-5 md:hidden"
        onClick={() => setHamburger(!hamburger)}
      >
        <div
          className={
            hamburger ? hamburgerOnStyles.style : hamburgerStyles.style
          }
        ></div>
        <div
          className={
            hamburger ? hamburgerOnStyles.style : hamburgerStyles.style
          }
        ></div>
        <div
          className={
            hamburger ? hamburgerOnStyles.style : hamburgerStyles.style
          }
        ></div>
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
            <Link className={linkStyles.style} href="/">
              Home{" "}
            </Link>
          </li>

          <li>
            <Link className={linkStyles.style} href="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className={linkStyles.style} href="/registration">
              Registration
            </Link>
          </li>
          <li>
            <Link className={linkStyles.style} href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className={linkStyles.style} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
