/** @jsxImportSource @emotion/react */
import Image from "next/image";
import * as cmdt_logo from "../public/cmdt_logo.png";
import { useRouter } from "next/router";
import { Button, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";

export const LandingPage = () => {
  const router = useRouter();

  return (
    <div
      css={{
        backgroundImage: "linear-gradient( #E4C7FB, white)",
        height: "400px",
      }}
    >
      <Container maxWidth={"xl"}>
        <header>
          <Toolbar
            disableGutters
            css={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div css={{ marginTop: "25px", paddingLeft: "15px" }}>
              <Image
                width={150}
                height={70}
                src={cmdt_logo}
                alt="CDMT"
                layout="intrinsic"
                onClick={() => {
                  router.push("/");
                }}
              />
            </div>

            <div
              css={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Button
                css={{
                  color: "#41255D",
                  "&:hover": {
                    color: "#EC1C78",
                    transition: "all .1s ease-in-out",
                    transform: "scale(1.1)",
                    backgroundColor: "transparent",
                  },
                }}
              >
                <Link href="/about">
                  <Typography>About</Typography>
                </Link>
              </Button>
              <Button
                css={{
                  color: "#41255D",
                  "&:hover": {
                    color: "#EC1C78",
                    transition: "all .1s ease-in-out",
                    transform: "scale(1.1)",
                    backgroundColor: "transparent",
                  },
                }}
              >
                <Link href="/">
                  <Typography>Log In</Typography>
                </Link>
              </Button>
              <Button
                css={{
                  backgroundColor: "#EC1C78",
                  marginLeft: "10px",
                  color: "white",
                  boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.15)",
                  "&:hover": {
                    backgroundColor: "#EC1C78",
                    transition: "all .1s ease-in-out",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <Typography>Sign Up</Typography>
              </Button>
            </div>
          </Toolbar>
        </header>
        <div css={{ paddingTop: "10%" }}>
          <div css={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h3" css={{ color: "#41255D" }}>
              Providing
            </Typography>
            <Typography variant="body1">
              Easy access to research providers in Aotearoa NZ as a one-stop
              portal
            </Typography>
            <Button
              css={{
                backgroundColor: "#41255D",
                marginLeft: "10px",
                color: "white",
                maxWidth: "100px",
                boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.15)",
                "&:hover": {
                  backgroundColor: "#41255D",
                  transition: "all .1s ease-in-out",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Typography>Learn More</Typography>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
