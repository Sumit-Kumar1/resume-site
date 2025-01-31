import Navbar from "../components/navbar";
import { rubik_normal } from "./font";

import "./globals.css";

export const metadata = {
  title: "Sumit Kumar - Resume Website",
  description: "Resume Website for sumit kumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#353353] text-white ${rubik_normal.className}`}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
