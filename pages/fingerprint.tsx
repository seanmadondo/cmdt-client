/** @jsxImportSource @emotion/react */
import { Box, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import { BarGraph } from "../data-components/overview/charts/BarGraph";
import { PageToolbar } from "../components/PageToolbar";

const Fingerprint: NextPage = () => {
  return (
    <div>
      <PageToolbar>
        <Typography>Research Areas</Typography>
      </PageToolbar>
      <Box
        css={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Paper elevation={8} css={{ borderRadius: 10 }}>
          <BarGraph />
        </Paper>
      </Box>
    </div>
  );
};

export default Fingerprint;
