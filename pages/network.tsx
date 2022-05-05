/** @jsxImportSource @emotion/react */
import { Box, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import { PageToolbar } from "../components/PageToolbar";
import { NetworkTable } from "../data-components/network/NetworkTable";

export async function getServerSideProps() {
  const response = await fetch(
    "https://nz-innovation-api.herokuapp.com/organisation",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sources: ["ABI"] }),
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
      </Box>
    </div>
  );
};

export default Network;
