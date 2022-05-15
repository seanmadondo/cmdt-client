/** @jsxImportSource @emotion/react */
import { Box, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import { PageToolbar } from "../components/PageToolbar";
import { DependencyWheelChart } from "../data-components/network/charts/DependancyWheelChart";
import { NetworkBarChart } from "../data-components/network/charts/NetworkBar";
import { NetworkTable } from "../data-components/network/tables/NetworkTable";

export async function getServerSideProps() {
  const response = await fetch(
    "https://nz-innovation-api.herokuapp.com/organisation",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sources: ["ABI"],
        targets: [
          "Auckland University of Technology",
          "University of Auckland",
          "University of Canterbury",
          "Institute of Environmental Science & Research (ESR) - New Zealand",
          "Unitec NZ",
          "University of Waikato",
          "AgResearch - New Zealand",
          "Auckland City Hospital",
          "Auckland District Health Board",
          "University of Otago",
          "Massey University",
          "Christchurch Hospital New Zealand",
          "Victoria University of Wellington",
        ],
      }),
    }
  );
  //Data
  const data = await response.json();

  //Pass data into page
  return {
    props: { data },
    //revalidate: 1000, // In seconds
  };
}

const Network: NextPage = (data) => {
  return (
    <div>
      <PageToolbar>
        <Typography>Network of Organisations</Typography>
      </PageToolbar>
      <Box
        css={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Paper
          elevation={3}
          css={{ alignContent: "center", borderRadius: 10, width: "40%" }}
        >
          <NetworkTable data={data} />
        </Paper>
        <Paper
          elevation={0}
          css={{ borderRadius: 10, width: "50%", marginLeft: "5%" }}
        >
          <NetworkBarChart data={data} />
        </Paper>
      </Box>
      <Box
        css={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingTop: "8%",
        }}
      >
        <Paper
          elevation={0}
          css={{ alignContent: "center", borderRadius: 10, width: "40%" }}
        >
          <DependencyWheelChart data={data} />
        </Paper>
      </Box>
    </div>
  );
};

export default Network;
