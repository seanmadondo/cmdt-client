/** @jsxImportSource @emotion/react */
import React, { ReactNode } from "react";
import { css } from "@emotion/react";
import Link from "next/link";
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

const settings = ["Account", "About", "Logout"];

export const Navbar = () => {
  const [value, setValue] = React.useState(0);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

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
          <Image
            width={100}
            height={50}
            src={"/../public/cmdt_logo.png"}
            alt="CDMT"
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
                  color: "#242424 !important",
                  fontWeight: "bold",
                },
              }}
            >
              <Tab label={<Link href="/overview">Overview</Link>} />
              <Tab label={<Link href="/fingerprint">Fingerprint</Link>} />
              <Tab label={<Link href="/network">Network</Link>} />
              <Tab label={<Link href="/grants">Grants</Link>} />
            </Tabs>

            <div>
              <IconButton onClick={handleOpenUserMenu}>
                <AccountCircleIcon />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
