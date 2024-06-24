import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrea Dayo • Front-end Developer",
  description:
    "Hey there! I'm Dhea, a passionate front-end developer and designer based in Manila, with an eye for detail and a love for crafting seamless digital experiences. I have always been driven to create innovative designs and translate them into clean and responsive code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {children}
      </body>
    </html>
  );
}
