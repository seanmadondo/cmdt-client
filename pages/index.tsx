/** @jsxImportSource @emotion/react */
import { Box, Divider, Typography } from "@mui/material";
import type { NextPage } from "next";
import OrgTable from "../data-components/home/OrgTable";

const Home: NextPage = () => {
  return (
    <>
      <Box
        css={{
          paddingTop: "20px",
          height: "60px",
        }}
      >
        <Typography color="#41255D" variant="h5">
          Welcome to the Data Visualtion Platform
        </Typography>

        <Typography variant="body2">
          A web-based platform to visualise the collaboration network between
          different universities and academics in NZ based on the publications.
        </Typography>
        <Divider
          variant="fullWidth"
          css={{
            marginBottom: "20px",
            marginTop: "10px",
          }}
        />
      </Box>
      <div css={{ paddingTop: "50px" }}>
        <OrgTable />
      </div>
    </>
  );
};

export default Home;
