/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import {
  AppBar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

//const cmdt_logo = require("../assets/cmdt_logo");

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  return (
    <AppBar position="sticky" color="transparent">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          css={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <img
            css={css({
              paddingLeft: "15px",
              width: "150px",
              height: "80",
            })}
            src={"../public/cmdt_logo.png"}
            alt="CDMT"
          />

          <Box
            css={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography textAlign="center">
              <Link href="/">Home</Link>
            </Typography>

            <Typography textAlign="center">
              <Link href="/overview">Overview</Link>
            </Typography>

            <Typography textAlign="center">
              <Link href="/fingerprint">Fingerprint</Link>
            </Typography>
            <Typography textAlign="center">
              <Link href="/network">Network</Link>
            </Typography>
            <Typography textAlign="center">
              <Link href="/grants">Grants</Link>
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

// export const Navbar = () => {
//   return (
//     <nav>
//       <Link href="/">
//         <a>Home</a>
//       </Link>
//       <Link href="/overview">
//         <a>Overview</a>
//       </Link>
//       <Link href="/fingerprint">
//         <a>Fingerprint</a>
//       </Link>
//       <Link href="/network">
//         <a>Network</a>
//       </Link>
//       <Link href="/grants">
//         <a>Grants</a>
//       </Link>
//     </nav>
//   );
// };
