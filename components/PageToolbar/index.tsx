/** @jsxImportSource @emotion/react */
import { Box, Container, Divider } from "@mui/material";
import React, { ReactNode } from "react";

interface PageToolbarProps {
  children: ReactNode;
}

export const PageToolbar = ({ children }: PageToolbarProps) => {
  return (
    <>
      <Box
        css={{
          paddingTop: "20px",
          height: "60px",
        }}
      >
        <Container
          maxWidth={"lg"}
          css={{
            display: "flex",
            flexDirection: "row",
            // alignContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </Container>
      </Box>
      <Divider
        variant="fullWidth"
        css={{
          marginBottom: "20px",
          marginTop: Object(children).length > 1 ? "30px" : "inherit",
        }}
      />
    </>
  );
};
