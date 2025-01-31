import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed flex justify-end py-5 border-b-2 border-white w-full">
      <Link href="/" className="btn btn-ghost text-xl hover:text-[#ffc107] active:text-[#ffc107]">
        Home
      </Link>
      <Link href="#about" className="btn btn-ghost text-xl hover:text-[#ffc107] active:text-[#ffc107]">
        About Me
      </Link>
      <a href="#skills" className="btn btn-ghost text-xl hover:text-[#ffc107] active:text-[#ffc107]">
        Skills & Projects
      </a>
      <a
        href="#experience"
        className="btn btn-ghost text-xl hover:text-[#ffc107] active:text-[#ffc107]"
      >
        Experience
      </a>
      <a href="#contact"  className="btn btn-ghost text-xl hover:text-[#ffc107] active:text-[#ffc107]">
        Contact Me
      </a>
    </nav>
  );
}
