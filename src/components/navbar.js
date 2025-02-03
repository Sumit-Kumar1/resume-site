import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function NavbarDrawer() {
  const refs = ["/", "#about", "#experience", "#skills", "#contact"]
  const refNames = ["Home", "About Me", "Experience", "Skills & Projects", "Contact Me"]
  const linkClasses = "btn btn-ghost text-xl hover:text-[#ffc107] active:text-[#ffc107]"

  return (
    <div className="drawer text-white fixed z-10">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-[#353353] w-full">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 lg:px-56">
            <Link href="/" className="btn btn-ghost text-xl">
              <Image
                src="/images/sk_cut.png"
                alt="Sumit Kumar"
                width={50}
                height={50}
              />
            </Link></div>
          <div className="hidden flex-none lg:block lg:px-60">
            <ul className="menu menu-horizontal">
              {
                refs.map((ref, index) => (
                  <li key={index}>
                    <Link href={ref} className={linkClasses}>{refNames[index]}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="bg-[#353353] h-0 border-b border-white"></div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-[#353353] w-full p-4 xs:mt-16">
          {
            refs.map((ref, index) => (
              <li key={index}>
                <Link href={ref} className={linkClasses}>{refNames[index]}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}