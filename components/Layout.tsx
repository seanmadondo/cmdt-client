import React, { ReactNode, useEffect, useState } from "react";
import Head from "next/head";
import { Navbar } from "./Navbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import { Container } from "@mui/material";
import { Footer } from "./Footer";
import { LandingPage } from "./LandingPage";
import { useUser } from "@auth0/nextjs-auth0";

interface LayoutProps {
  children: ReactNode; //The Website Pages
}

export const Layout = ({ children }: LayoutProps) => {
  //const [userLoggedIn, setUserLoggedIn] = useState(false);
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) return <div>{error.message}</div>;

  // useEffect(() => {
  //   // Client-side-only code
  //   window.localStorage.getItem("cmdt") && setUserLoggedIn(true);
  // }, []);

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
