import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="navbar px-60 bg-[#353353] text-white">
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost text-xl">
            <Image
              src="/images/sk_cut.png"
              alt="Sumit Kumar"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className="navbar-end">
          <Link
            href="/"
            className="btn btn-ghost text-md hover:text-[#ffc107] active:text-[#ffc107]"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="btn btn-ghost text-md hover:text-[#ffc107] active:text-[#ffc107]"
          >
            About Me
          </Link>
          <Link
            href="#skills"
            className="btn btn-ghost text-md hover:text-[#ffc107] active:text-[#ffc107]"
          >
            Skills & Projects
          </Link>
          <Link
            href="#experience"
            className="btn btn-ghost text-md hover:text-[#ffc107] active:text-[#ffc107]"
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className="btn btn-ghost text-md hover:text-[#ffc107] active:text-[#ffc107]"
          >
            Contact Me
          </Link>
        </div>
      </div>
      <div className="bg-[#353353] h-0 border-b border-white"></div>
    </>
  );
}
