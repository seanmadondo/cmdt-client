/** @jsxImportSource @emotion/react */
import Image from "next/image";
import * as cmdt_logo from "../public/cmdt_logo.png";
import * as cmdt_landing from "../assets/cmdt-landing.png";
import { useRouter } from "next/router";
import { Button, Container, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import Link from "next/link";
import { RegisterDialog } from "./Dialog/RegisterDialog";

export const LandingPage = () => {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

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
                    transition: "all .1s ease-in-out",
                    transform: "scale(1.1)",
                    backgroundColor: "transparent",
                  },
                }}
              >
                <a
                  href="https://www.cmdt.org.nz/cmdt"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Typography>About</Typography>
                </a>
              </Button>
              <Button
                css={{
                  color: "#41255D",
                  "&:hover": {
                    transition: "all .1s ease-in-out",
                    transform: "scale(1.1)",
                    backgroundColor: "transparent",
                  },
                }}
              >
                <Link href="/api/auth/login">
                  <Typography>Log In</Typography>
                </Link>
              </Button>
              <RegisterDialog
                open={openDialog}
                handleClose={handleCloseDialog}
              />
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
                onClick={handleClickOpenDialog}
              >
                <Typography css={{ minWidth: "100px" }}>Register</Typography>
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
                <a
                  href="https://www.cmdt.org.nz/cmdt"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Learn More
                </a>
              </Typography>
            </Button>
          </div>
          <div css={{ marginLeft: "6%" }}>
            <div>
              <Image
                width={750}
                height={530}
                src={cmdt_landing}
                alt="p1"
                priority
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
