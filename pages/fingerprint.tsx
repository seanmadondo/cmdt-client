/** @jsxImportSource @emotion/react */
import { Box, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import { BarGraph } from "./../data-components/fingerprint/BarGraph";
import { PageToolbar } from "../components/PageToolbar";
import ResearchAreasTable from "../data-components/fingerprint/ResearchAreasTable";

const Fingerprint: NextPage = () => {
  return (
    <div>
      <PageToolbar>
        <Typography>Research Areas</Typography>
      </PageToolbar>
      <Box
        css={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Paper
          elevation={3}
          css={{ alignContent: "center", borderRadius: 10, width: "40%" }}
        >
          <ResearchAreasTable />
        </Paper>
        <Paper
          elevation={0}
          css={{ borderRadius: 10, width: "50%", marginLeft: "5%" }}
        >
          <BarGraph />
        </Paper>
      </Box>
    </div>
  );
};

export default Fingerprint;
