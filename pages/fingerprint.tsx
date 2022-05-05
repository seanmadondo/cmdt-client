/** @jsxImportSource @emotion/react */
import { Box, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import { PageToolbar } from "../components/PageToolbar";
import ResearchAreasTable from "../data-components/fingerprint/ResearchAreasTable";
import { ResearchAreasBarChart } from "../data-components/fingerprint/ResearchAreasBar";
import { Dropdown } from "../components/Dropdown";

export async function getServerSideProps() {
  const response = await fetch(
    "https://nz-innovation-api.herokuapp.com/subject",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sources: ["ABI"], targets: ["AUT"] }),
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

const Fingerprint: NextPage = (data) => {
  const someData = ["10", "20", "30"];

  console.log(data);
  return (
    <div>
      <PageToolbar>
        <Typography>Research Areas</Typography>
        {/* <Dropdown label="Target" options={someData} /> */}
      </PageToolbar>
      <Box
        css={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Paper
          elevation={3}
          css={{ alignContent: "center", borderRadius: 10, width: "40%" }}
        >
          <ResearchAreasTable data={data} />
        </Paper>
        <Paper
          elevation={0}
          css={{ borderRadius: 10, width: "50%", marginLeft: "5%" }}
        >
          <ResearchAreasBarChart data={data} />
        </Paper>
      </Box>
    </div>
  );
};

export default Fingerprint;
