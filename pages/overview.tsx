/** @jsxImportSource @emotion/react */
import { Box, Divider, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import { BarGraph } from "../data-components/overview/charts/BarGraph";
import { PageToolbar } from "../components/PageToolbar";
import { PieChart } from "../data-components/overview/charts/PieChart";
import TotalPublications from "../data-components/overview/tables/TotalPublications";

const Overview: NextPage = () => {
  return (
    <div>
      <PageToolbar>
        <Typography>Total Publications</Typography>
      </PageToolbar>
      <Box
        css={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Paper
          elevation={3}
          css={{ alignContent: "center", borderRadius: 10, width: "30%" }}
        >
          <TotalPublications />
        </Paper>
        <Paper
          elevation={3}
          css={{
            alignContent: "center",
            borderRadius: 10,
            width: "30%",
            marginLeft: "5%",
          }}
        >
          <PieChart />
        </Paper>
        <Divider orientation="vertical" />
        <Paper
          elevation={3}
          css={{ borderRadius: 10, width: "50%", marginLeft: "5%" }}
        >
          <BarGraph />
        </Paper>
      </Box>
      <div css={{ marginTop: 10 }}>
        <PageToolbar>
          <Typography>By Category</Typography>
        </PageToolbar>
        <Box
          css={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Paper
            elevation={5}
            css={{ alignContent: "center", borderRadius: 10, width: "30%" }}
          >
            <PieChart />
          </Paper>
        </Box>
      </div>
    </div>
  );
};

export default Overview;
