/** @jsxImportSource @emotion/react */
import { Box, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import { GrantsTreemap } from "../data-components/grants/GrantsTreemap";
import { PageToolbar } from "../components/PageToolbar";

// export async function getServerSideProps() {
//   const response = await fetch(
//     "https://nz-innovation-api.herokuapp.com/grant",
//     {
//       method: "GET",
//       headers: {
//         "User-Agent": "*",
//         "Content-Type": "application/json",
//       },
//       // body: JSON.stringify({ sources: ["ABI", "VUW"] }),
//     }
//   );
//   //Data
//   const data = await response.json();

//   //Pass data into page
//   return {
//     props: { data },
//     //revalidate: 1000, // In seconds
//   };
// }

const Grants: NextPage = () => {
  //console.log(data);
  return (
    <div>
      <PageToolbar>
        <Typography>Funding Organisations</Typography>
      </PageToolbar>
      <Box
        css={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Paper
          elevation={0}
          css={{ borderRadius: 10, width: "50%", marginLeft: "5%" }}
        >
          <GrantsTreemap />
        </Paper>
      </Box>
    </div>
  );
};

export default Grants;
