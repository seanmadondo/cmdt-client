/** @jsxImportSource @emotion/react */
import Image from "next/image";
import * as cmdt_logo from "../public/cmdt_logo.png";
import { useRouter } from "next/router";
import { Box, Button, Container, Tab, Tabs, Toolbar } from "@mui/material";
import React, { useState } from "react";

export const LandingPage = () => {
  const [value, setValue] = useState(0);

  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      css={{
        backgroundImage: "linear-gradient( #E4C7FB, white)",
        height: 100,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          css={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <div css={{ marginTop: "25px", paddingLeft: "15px" }}>
            <Image
              css={{ marginTop: "25px" }}
              width={100}
              height={50}
              src={cmdt_logo}
              alt="CDMT"
              layout="intrinsic"
              onClick={() => {
                router.push("/");
              }}
            />
          </div>
          <Box
            css={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              css={{
                "& .MuiTabs-indicator": { backgroundColor: "#41255D" },
                "& .Mui-selected": {
                  color: "#242424 !important",
                  fontWeight: "bold",
                },
              }}
            >
              <Tab label={"Welcome"} onClick={() => router.push("/")} />
              <Tab label={"About"} onClick={() => router.push("/about")} />
              <Tab label={"Log In"} onClick={() => router.push("/")} />
            </Tabs>
          </Box>
          <div css={{ position: "relative" }}>
            <Button
              css={{
                backgroundColor: "#EC1C78",
                marginLeft: "10px",
                color: "white",
                "&:hover": {
                  color: "#EC1C78",
                  border: " 2px solid #EC1C78",
                },
              }}
            >
              Create An Account
            </Button>
          </div>
        </Toolbar>
      </Container>
    </Box>
  );
};
