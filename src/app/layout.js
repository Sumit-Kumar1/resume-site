import NavbarDrawer from "../components/navbar";
import { rubik_normal } from "./font";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

export const metadata = {
  title: "Sumit Kumar - Resume Website",
  description: "Resume Website for sumit kumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`antialiased dark:bg-[#353353] dark:text-white bg-[#f3f3f9] ${rubik_normal.className}`}
      >
        <NavbarDrawer></NavbarDrawer>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
