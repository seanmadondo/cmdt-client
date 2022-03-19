/** @jsxImportSource @emotion/react */
import Image from "next/image";
import * as cmdt_logo from "../public/cmdt_logo.png";
import * as p1 from "../assets/2.png";
import * as p2 from "../assets/3.png";
import * as p3 from "../assets/4.png";
import * as p4 from "../assets/5.png";
import { useRouter } from "next/router";
import { Button, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";

export const LandingPage = () => {
  const router = useRouter();

  function login() {
    window.localStorage.setItem("cmdt", "userLoggedIn");
    router.reload();
  }

  return (
    <div
      css={{
        backgroundImage: "linear-gradient( #E4C7FB, white)",
        height: "50%",
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
              justifyContent: "space-between",
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
                <a href="https://www.cmdt.org.nz/cmdt" target="_blank">
                  <Typography>About</Typography>
                </a>
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
                onClick={login}
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
                <Typography css={{ minWidth: "100px" }}>Sign Up</Typography>
              </Button>
            </div>
          </Toolbar>
        </header>
        <div
          css={{
            paddingTop: "5%",
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "5%",
              minWidth: "30%",
            }}
          >
            <Typography variant="h4" css={{ color: "#41255D" }}>
              Providing
            </Typography>
            <Typography variant="body1">
              Easy access to research providers in Aotearoa NZ as a one-stop
              portal.
            </Typography>
            <Typography
              variant="h4"
              css={{ color: "#41255D", paddingTop: "6%" }}
            >
              Facilitating
            </Typography>
            <Typography variant="body1">
              Collaborations with researchers, companies and government
              organisations.
            </Typography>
            <Typography
              variant="h4"
              css={{ color: "#41255D", paddingTop: "6%" }}
            >
              Connecting
            </Typography>
            <Typography variant="body1">
              Researchers and start-up companies to the CMDT’s wide
              international network.
            </Typography>
            <Typography
              variant="h4"
              css={{ color: "#41255D", paddingTop: "6%" }}
            >
              Developing & Implementing
            </Typography>
            <Typography variant="body1">
              Strategic initiatives to strengthen and connect the MedTech
              innovation ecosystem.
            </Typography>
            <Button
              css={{
                backgroundColor: "#41255D",
                color: "white",
                maxWidth: "100px",
                boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.15)",
                marginTop: "6%",
                "&:hover": {
                  backgroundColor: "#41255D",
                  transition: "all .1s ease-in-out",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Typography>
                {" "}
                <a href="https://www.cmdt.org.nz/cmdt" target="_blank">
                  {" "}
                  Learn More
                </a>
              </Typography>
            </Button>
          </div>
          <div css={{ marginLeft: "6%" }}>
            <div>
              <Image
                width={300}
                height={300}
                src={p1}
                alt="p1"
                priority
                layout="intrinsic"
                css={{
                  "&:hover": {
                    transition: "all .5s ease-in-out",
                    transform: "scale(1.05)",
                  },
                }}
              />
              <Image
                width={300}
                height={300}
                src={p2}
                alt="p1"
                layout="intrinsic"
                css={{
                  "&:hover": {
                    transition: "all .5s ease-in-out",
                    transform: "scale(1.05)",
                  },
                }}
              />
            </div>
            <div>
              <Image
                width={300}
                height={300}
                src={p3}
                alt="p1"
                layout="intrinsic"
                css={{
                  "&:hover": {
                    transition: "all .5s ease-in-out",
                    transform: "scale(1.05)",
                  },
                }}
              />
              <Image
                width={300}
                height={300}
                src={p4}
                alt="p1"
                layout="intrinsic"
                css={{
                  "&:hover": {
                    transition: "all .5s ease-in-out",
                    transform: "scale(1.05)",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
