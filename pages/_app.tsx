import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { UserProvider } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";
import { Router } from "next/router";
import { LinearProgress } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      SetLoading(true);
    });

    Router.events.on("routeChangeComplete", (url) => {
      SetLoading(false);
    });
  }, []);
  return (
    <UserProvider>
      {loading && <LinearProgress color="secondary" />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
