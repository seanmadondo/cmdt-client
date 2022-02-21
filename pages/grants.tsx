/** @jsxImportSource @emotion/react */
import { Box, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import { PageToolbar } from "../components/PageToolbar";

const Grants: NextPage = () => {
  return (
    <div>
      <PageToolbar>
        <Typography>Funding Organisations</Typography>
      </PageToolbar>
      <Box
        css={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Paper elevation={8} css={{ borderRadius: 10 }}></Paper>
      </Box>
    </div>
  );
};

export default Grants;
