import React, { ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "./Navbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import { Container } from "@mui/material";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>CMDT</title>
        <meta name="description" content="CMDT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container maxWidth={"lg"}>{children}</Container>
    </ThemeProvider>
  );
};
