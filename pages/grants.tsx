/** @jsxImportSource @emotion/react */
import { Box, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import { GrantsTreemap } from "../data-components/grants/GrantsTreemap";
import { PageToolbar } from "../components/PageToolbar";
import { MAIN_SOURCE_ABBR } from "../utils/constants";
import GrantsTable from "../data-components/grants/GrantsTable";
import { MultiSelectDropdown } from "../components/MultiSelectDropdown";
import { GrantsProvider } from "../contexts/GrantsProvider";

export async function getServerSideProps() {
  const response = await fetch(
    "https://nz-innovation-api.herokuapp.com/grant",
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
  };
}

const Grants: NextPage = (data) => {
  return (
    <GrantsProvider value={data}>
      <PageToolbar>
        <Typography>Funding Organisations</Typography>
        <div css={{ marginLeft: "3%" }}>
          <MultiSelectDropdown
            options={MAIN_SOURCE_ABBR}
            label="Source"
            defaultValue="ABI"
            ctx="Grants"
          />
        </div>
      </PageToolbar>
      <Box
        css={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Paper elevation={0} css={{ borderRadius: 10, width: "40%" }}>
          <GrantsTable />
        </Paper>
        <Paper
          elevation={0}
          css={{ borderRadius: 10, width: "50%", marginLeft: "5%" }}
        >
          <GrantsTreemap />
        </Paper>
      </Box>
    </GrantsProvider>
  );
};

export default Grants;
