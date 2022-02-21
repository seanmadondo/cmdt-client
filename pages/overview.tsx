/** @jsxImportSource @emotion/react */
import { Box, Divider, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import { BarGraph } from "../charts/BarGraph";
import { PageToolbar } from "../components/PageToolbar";
import { PieChart } from "../charts/PieChart";

const Overview: NextPage = () => {
  return (
    <div>
      <PageToolbar>
        <Typography>Total Publications</Typography>
      </PageToolbar>
      <Box
        css={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Paper elevation={8} css={{ borderRadius: 10 }}>
          <PieChart />
        </Paper>
        <Divider orientation="vertical" />
        <Paper elevation={8} css={{ borderRadius: 10 }}>
          <BarGraph />
        </Paper>
      </Box>
      <PageToolbar>
        <Typography>Total Publications By Category</Typography>
      </PageToolbar>
    </div>
  );
};

export default Overview;
