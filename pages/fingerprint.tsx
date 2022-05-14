/** @jsxImportSource @emotion/react */
import { Box, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import { PageToolbar } from "../components/PageToolbar";
import ResearchAreasTable from "../data-components/fingerprint/ResearchAreasTable";
import { ResearchAreasBarChart } from "../data-components/fingerprint/ResearchAreasBar";
import { Dropdown } from "../components/Dropdown";
import { FingerprintProvider } from "../contexts/FingerprintProvider";

export async function getServerSideProps() {
  const response = await fetch(
    "https://nz-innovation-api.herokuapp.com/subject",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sources: ["ABI"], targets: ["ALL"] }),
    }
  );
  //Data
  const data = await response.json();

  //Pass data into page
  return {
    props: { data },
  };
}

const Fingerprint: NextPage = (data) => {
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

  const targetData = [
    "ALL",
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

  return (
    <FingerprintProvider value={data}>
      <PageToolbar>
        <Typography>Research Areas</Typography>
        <div css={{ marginLeft: "3%" }}>
          <Dropdown
            options={sourceData}
            label="Source"
            defaultValue="ABI"
            ctx="Fingerprint"
          />
        </div>
        <div css={{ marginLeft: "3%" }}>
          <Dropdown
            options={targetData}
            label="Target"
            defaultValue="ALL"
            ctx="Fingerprint"
          />
        </div>
      </PageToolbar>
      <Box
        css={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Paper
          elevation={3}
          css={{ alignContent: "center", borderRadius: 10, width: "45%" }}
        >
          <ResearchAreasTable />
        </Paper>
        <Paper
          elevation={0}
          css={{ borderRadius: 10, width: "50%", marginLeft: "5%" }}
        >
          <ResearchAreasBarChart />
        </Paper>
      </Box>
    </FingerprintProvider>
  );
};

export default Fingerprint;
