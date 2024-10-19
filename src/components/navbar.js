import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-end">
      <Link href="/" className="btn btn-ghost text-md link link-hover">
        Home
      </Link>
      <Link href="/skills" className="btn btn-ghost text-md link link-hover">
        Skills & Projects
      </Link>
      <Link
        href="/experience"
        className="btn btn-ghost text-md link link-hover"
      >
        Experience
      </Link>
      <Link href="/contact" className="btn btn-ghost text-md link link-hover">
        Contact Me
      </Link>
    </nav>
  );
}
