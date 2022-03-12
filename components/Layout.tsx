import React, { ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "./Navbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import { Container } from "@mui/material";
import { Footer } from "./Footer";
import { LandingPage } from "./LandingPage";

interface LayoutProps {
  children: ReactNode; //The Website Pages
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>CMDT</title>
        <meta name="description" content="CMDT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <LandingPage /> */}
      <Navbar />
      <Container maxWidth={"lg"}>{children}</Container>
      <Footer />
    </ThemeProvider>
  );
};
