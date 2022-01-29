import React, { ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>CMDT</title>
        <meta name="description" content="CMDT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
    </div>
  );
};
