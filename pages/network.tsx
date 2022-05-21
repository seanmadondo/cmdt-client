/** @jsxImportSource @emotion/react */
import { Box, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import { Dropdown } from "../components/Dropdown";
import { MultiSelectDropdown } from "../components/MultiSelectDropdown";
import { PageToolbar } from "../components/PageToolbar";
import { NetworkProvider } from "../contexts/NetworkProvider";
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
        sources: [
          "ABI",
          "AUT",
          "CDHB",
          "CI",
          "LU",
          "MU",
          "UoA",
          "UoC",
          "UoO",
          "UoW",
          "VUW",
        ],
        targets: [
          "Auckland University of Technology",
          "University of Auckland",
          "University of Canterbury",
          // "Institute of Environmental Science & Research (ESR) - New Zealand",
          "Unitec NZ",
          "University of Waikato",
          // "AgResearch - New Zealand",
          // "Auckland City Hospital",
          // "Auckland District Health Board",
          "University of Otago",
          "Massey University",
          // "Christchurch Hospital New Zealand",
          "Victoria University of Wellington",
          "Callaghan Innovation",
          "Lincoln University",
          "Auckland Bioengineering Institute",
          // "Canterbury District Health Board",
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
  const sourceData = [
    "ABI",
    "AUT",
    "CDHB",
    "CI",
    "LU",
    "MU",
    "UoA",
    "UoC",
    "UoO",
    "UoW",
    "VUW",
  ];

  const areas = ["NZ Universities", "Worldwide"];
  return (
    <NetworkProvider value={data}>
      <PageToolbar>
        <Typography>Network of Organisations</Typography>
        <div css={{ marginLeft: "3%" }}>
          <MultiSelectDropdown
            options={sourceData}
            label="Source"
            defaultValue="ALL"
            ctx="Network"
          />
        </div>
        <div css={{ marginLeft: "3%" }}>
          <Dropdown
            options={areas}
            label="Area"
            defaultValue="NZ Universities"
            ctx="Network"
          />
        </div>
      </PageToolbar>
      <Box
        css={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Paper
          elevation={3}
          css={{ alignContent: "center", borderRadius: 10, width: "40%" }}
        >
          <NetworkTable />
        </Paper>
        <Paper
          elevation={0}
          css={{ borderRadius: 10, width: "50%", marginLeft: "5%" }}
        >
          <NetworkBarChart />
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
          {/* <DependencyWheelChart data={data} /> */}
        </Paper>
      </Box>
    </NetworkProvider>
  );
};

export default Network;
