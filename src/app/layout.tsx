import React from "react";
import { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import AnimatedCursor from "react-animated-cursor";
import PageTransition from "@/app/components/animation/PageTransition";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s • Andrea Dayo",
    default: "Portfolio • Andrea Dayo",
  },
  description:
    "Hey there! I'm Andrea, a passionate front-end developer and designer based in Manila, with an eye for detail and a love for crafting seamless digital experiences. I have always been driven to create innovative designs and translate them into clean and responsive code.",
  metadataBase: new URL("https://andreadayo.netlify.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/assets/images/Cover.png" />
      </head>
      <body>
        <Navbar />
        {typeof window !== "undefined" && window.innerWidth >= 1024 && (
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            innerStyle={{
              backgroundColor: "var(--white)",
              mixBlendMode: "exclusion",
            }}
            outerStyle={{
              border: "3px solid var(--white)",
              mixBlendMode: "exclusion",
            }}
          />
        )}
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
