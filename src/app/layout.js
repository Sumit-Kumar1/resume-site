import Navbar from "../components/navbar";
import Profiles from "../components/profileBar";
import "./globals.css";

export const metadata = {
  title: "Sumit Kumar - Resume Website",
  description: "Resume Website for sumit kumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar></Navbar>
        <Profiles></Profiles>
        {children}
      </body>
    </html>
  );
}
