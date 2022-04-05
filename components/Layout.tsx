import React, { ReactNode, useEffect, useState } from "react";
import Head from "next/head";
import { Navbar } from "./Navbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import { Container, LinearProgress } from "@mui/material";
import { Footer } from "./Footer";
import { LandingPage } from "./LandingPage";
import { useUser } from "@auth0/nextjs-auth0";

interface LayoutProps {
  children: ReactNode; //The Website Pages
}

export const Layout = ({ children }: LayoutProps) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return (
      <div>
        <LinearProgress color="secondary" />
      </div>
    );
  }

  if (error) return <div>{error.message}</div>;

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>CMDT</title>
        <meta name="description" content="CMDT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!user ? (
        <LandingPage />
      ) : (
        <>
          <Navbar />
          <Container maxWidth={"lg"}>{children}</Container>
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
};
