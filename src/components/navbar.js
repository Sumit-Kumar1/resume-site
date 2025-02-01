import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
    <div className="navbar px-60 bg-[#353353] text-white">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Sumit Kumar</a>
      </div>
      <div className="navbar-end">
        <a href="/" className="btn btn-ghost text-md hover:text-[#ffc107] active:text-[#ffc107]">
          Home
        </a>
        <a href="#about" className="btn btn-ghost text-md hover:text-[#ffc107] active:text-[#ffc107]">
          About Me
        </a>
        <a href="#skills" className="btn btn-ghost text-md hover:text-[#ffc107] active:text-[#ffc107]">
          Skills & Projects
        </a>
        <a href="#experience" className="btn btn-ghost text-md hover:text-[#ffc107] active:text-[#ffc107]">
          Experience
        </a>
        <a href="#contact" className="btn btn-ghost text-md hover:text-[#ffc107] active:text-[#ffc107]">
          Contact Me
        </a>
      </div>
    </div>
    <div className="bg-[#353353] h-0 border-b border-white"></div>
    </>
  );
}
