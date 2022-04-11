/** @jsxImportSource @emotion/react */
import { Box, Divider, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import { TotalPublicationsBarChart } from "../data-components/overview/charts/TotalPublicationsBar";
import { PageToolbar } from "../components/PageToolbar";
import TotalPublications from "../data-components/overview/tables/TotalPublications";
import TotalByCategory from "../data-components/overview/tables/TotalByCategory";
import { TotalPublicationsPieChart } from "../data-components/overview/charts/TotalPublicationsPie";

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
          elevation={0}
          css={{
            alignContent: "center",
            borderRadius: 10,
            width: "30%",
            marginLeft: "5%",
          }}
        >
          <TotalPublicationsPieChart />
        </Paper>
        <Divider orientation="vertical" />
        <Paper
          elevation={0}
          css={{ borderRadius: 10, width: "50%", marginLeft: "5%" }}
        >
          <TotalPublicationsBarChart />
        </Paper>
      </Box>
      <div css={{ marginTop: 10 }}>
        <PageToolbar>
          <Typography>By Category</Typography>
          {/* <CategorySelect /> */}
        </PageToolbar>
        <Box
          css={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Paper
            elevation={0}
            css={{ alignContent: "center", borderRadius: 10, width: "60%" }}
          >
            <TotalByCategory />
          </Paper>
          <Paper
            elevation={0}
            css={{
              alignContent: "center",
              borderRadius: 10,
              width: "30%",
              marginLeft: "5%",
            }}
          >
            <TotalPublicationsPieChart />
          </Paper>
        </Box>
      </div>
    </div>
  );
};

export default Overview;
