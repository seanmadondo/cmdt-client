/** @jsxImportSource @emotion/react */
import { Box, Divider, LinearProgress, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import { TotalPublicationsBarChart } from "../data-components/overview/charts/TotalPublicationsBar";
import { PageToolbar } from "../components/PageToolbar";
import { TotalPublications } from "../data-components/overview/tables/TotalPublications";
import TotalByCategory from "../data-components/overview/tables/TotalByCategory";
import { TotalPublicationsPieChart } from "../data-components/overview/charts/TotalPublicationsPie";
import { Dropdown } from "../components/Dropdown";

export async function getServerSideProps() {
  //Fetch
  const response = await fetch(
    "https://nz-innovation-api.herokuapp.com/overview"
  );
  //Data
  const data = await response.json();

  //Pass data into page
  return {
    props: { data },
    //revalidate: 1000, // In seconds
  };
}

// export async function getServerSideProps() {
//   //Fetch
//   const [overviewData, categoryData] = await Promise.all([
//     fetch("https://nz-innovation-api.herokuapp.com/overview").then((r) =>
//       r.json()
//     ),
//     fetch("https://nz-innovation-api.herokuapp.com/overview_by_category").then(
//       (r) => r.json()
//     ),
//   ]);
//   //Data
//   //const data = await response.json();

//   //Pass data into page
//   return {
//     props: { overviewData, categoryData },
//     //revalidate: 1000, // In seconds
//   };
// }

const Overview: NextPage = (data) => {
  const categoryOptions = ["Biomedical engineering"];

  return (
    <div>
      <PageToolbar>
        <Typography>Total Publications</Typography>
      </PageToolbar>
      <Box
        css={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Paper
          elevation={3}
          css={{ alignContent: "center", borderRadius: 10, width: "30%" }}
        >
          <TotalPublications data={data} isLoading={!data} />
        </Paper>
        <Paper
          elevation={0}
          css={{
            alignContent: "center",
            borderRadius: 10,
            width: "30%",
            marginLeft: "5%",
          }}
        >
          <TotalPublicationsPieChart data={data} />
        </Paper>
        <Divider orientation="vertical" />
        <Paper
          elevation={0}
          css={{ borderRadius: 10, width: "50%", marginLeft: "5%" }}
        >
          <TotalPublicationsBarChart data={data} />
        </Paper>
      </Box>
      <div css={{ marginTop: 10 }}>
        <PageToolbar>
          <Typography>By Category</Typography>
          <div css={{ marginLeft: "3%" }}>
            <Dropdown
              options={categoryOptions}
              label="Category"
              defaultValue="Biomedical engineering"
            />
          </div>
        </PageToolbar>
        <Box
          css={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Paper
            elevation={0}
            css={{ alignContent: "center", borderRadius: 10, width: "60%" }}
          >
            <TotalByCategory />
          </Paper>
          <Paper
            elevation={0}
            css={{
              alignContent: "center",
              borderRadius: 10,
              width: "30%",
              marginLeft: "5%",
            }}
          ></Paper>
        </Box>
      </div>
    </div>
  );
};

export default Overview;
