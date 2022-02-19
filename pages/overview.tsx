/** @jsxImportSource @emotion/react */
import { Box, Divider, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import { BarGraph } from "../charts/BarGraph";
import { Toolbar } from "../components/Toolbar";
import { PieChart } from "../charts/PieChart";

const Overview: NextPage = () => {
  return (
    <div>
      <Toolbar>
        <Typography>Total Publications</Typography>
      </Toolbar>
      <Box css={{ display: "flex", flexDirection: "row" }}>
        <Paper elevation={8} css={{ borderRadius: 10 }}>
          <PieChart />
        </Paper>
        <Divider orientation="vertical" />
        <Paper elevation={8} css={{ borderRadius: 10 }}>
          <BarGraph />
        </Paper>
      </Box>
    </div>
  );
};

export default Overview;
