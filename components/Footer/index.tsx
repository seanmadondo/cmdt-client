/** @jsxImportSource @emotion/react */
import { AppBar, Container, Link, Toolbar, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <AppBar
      position="static"
      css={{
        backgroundColor: "white",
        marginTop: "calc(8% + 20px)",
        bottom: 0,
        height: "100px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            href="https://clarivate.com/webofsciencegroup/solutions/web-of-science/"
            target="_blank"
          >
            <Typography css={{ color: "grey" }}>
              {"Publication Data retrieved from the Web of Science Database"}
            </Typography>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
