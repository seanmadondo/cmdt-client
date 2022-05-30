/** @jsxImportSource @emotion/react */
import { Box, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import { PageToolbar } from "../components/PageToolbar";
import ResearchAreasTable from "../data-components/fingerprint/ResearchAreasTable";
import { ResearchAreasBarChart } from "../data-components/fingerprint/ResearchAreasBar";
import { Dropdown } from "../components/Dropdown";
import { FingerprintProvider } from "../contexts/FingerprintProvider";
import { MAIN_SOURCE_ABBR } from "../utils/constants";

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
  const targetData = ["ALL", ...MAIN_SOURCE_ABBR];

  return (
    <FingerprintProvider value={data}>
      <PageToolbar>
        <Typography>Research Areas</Typography>
        <div css={{ marginLeft: "3%" }}>
          <Dropdown
            options={MAIN_SOURCE_ABBR}
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
