/** @jsxImportSource @emotion/react */
import { Box, Container, Divider } from "@mui/material";
import React, { ReactNode } from "react";

interface PageToolbarProps {
  children: ReactNode;
}

export const PageToolbar = ({ children }: PageToolbarProps) => {
  return (
    <>
      <Box css={{ paddingTop: "20px", height: "60px" }}>
        <Container maxWidth={"lg"}>{children}</Container>
      </Box>
      <Divider variant="fullWidth" css={{ marginBottom: "20px" }} />
    </>
  );
};
