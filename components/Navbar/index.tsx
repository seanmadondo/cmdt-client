/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import Image from "next/image";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouter } from "next/router";
import * as cmdt_logo from "../../public/cmdt_logo.png";
import Link from "next/link";

const settings = ["Account", "About", "Logout"];

export const Navbar = () => {
  const [value, setValue] = React.useState(0);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" css={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          css={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Image
            width={100}
            height={50}
            src={cmdt_logo}
            alt="CDMT"
            layout="intrinsic"
            onClick={() => {
              router.push("/");
              setValue(0);
            }}
          />

          <Box
            css={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              css={{
                "& .MuiTabs-indicator": { backgroundColor: "#41255D" },
                "& .Mui-selected": {
                  color: "#41255D !important",
                  fontWeight: "bold",
                },
              }}
            >
              <Tab label={"Home"} onClick={() => router.push("/")} />
              <Tab
                label={"Overview"}
                onClick={() => router.push("/overview")}
              />
              <Tab
                label={"Fingerprint"}
                onClick={() => router.push("/fingerprint")}
              />
              <Tab label={"Network"} onClick={() => router.push("/network")} />
              <Tab label={"Grants"} onClick={() => router.push("/grants")} />
            </Tabs>

            <div>
              <IconButton
                onClick={handleOpenUserMenu}
                css={{ marginLeft: "20px" }}
              >
                <AccountCircleIcon fontSize="large" />
              </IconButton>
              <Menu
                css={{ marginTop: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {/* {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))} */}
                <MenuItem>
                  <Link href="/api/auth/logout" passHref>
                    <Typography textAlign="center">Logout</Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
