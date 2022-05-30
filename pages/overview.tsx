/** @jsxImportSource @emotion/react */
import { Box, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import { TotalPublicationsBarChart } from "../data-components/overview/charts/TotalPublicationsBar";
import { PageToolbar } from "../components/PageToolbar";
import { TotalPublications } from "../data-components/overview/tables/TotalPublications";
import TotalByCategory from "../data-components/overview/tables/TotalByCategory";
import { TotalPublicationsPieChart } from "../data-components/overview/charts/TotalPublicationsPie";
import { Dropdown } from "../components/Dropdown";
import { PublicationsByCategoryPie } from "../data-components/overview/charts/PublicationsByCategoryPie";
import { useEffect, useState } from "react";
import { OverviewProvider } from "../contexts/OverviewProvider";

interface CatergoryListProps {
  categoryList: string[];
}

export async function getServerSideProps() {
  //Fetch
  const [overviewData, categoryData] = await Promise.all([
    fetch("https://nz-innovation-api.herokuapp.com/overview").then((r) =>
      r.json()
    ),
    fetch("https://nz-innovation-api.herokuapp.com/subject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        targets: ["ALL"],
        categories: ["Engineering, Biomedical"],
      }),
    }).then((r) => r.json()),
  ]);

  //Pass data into page
  return {
    props: { overviewData, categoryData },
  };
}

const Overview: NextPage = ({ overviewData, categoryData }: any) => {
  const [categoryList, setCategoryList] = useState<string[]>([
    "Engineering, Biomedical",
  ]);

  useEffect(() => {
    const getOverviewCategoryList = async () => {
      const response = await fetch("/api/category-list");
      const data: CatergoryListProps = await response.json();
      setCategoryList(Object.values(data)[0]);
    };
    getOverviewCategoryList();
  }, []);

  return (
    <OverviewProvider value={categoryData}>
      <PageToolbar>
        <Typography>Total Publications</Typography>
      </PageToolbar>
      {/* First Overview Section ------------- */}
      <Box
        css={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Paper
          elevation={3}
          css={{ alignContent: "center", borderRadius: 10, width: "30%" }}
        >
          <TotalPublications data={{ data: overviewData }} />
        </Paper>
        <Paper
          elevation={0}
          css={{
            alignContent: "center",
            borderRadius: 10,
            width: "60%",
            marginLeft: "5%",
          }}
        >
          <TotalPublicationsPieChart data={{ data: overviewData }} />
        </Paper>
      </Box>
      {/* Second Overview Section ------------- */}
      <div css={{ marginTop: "20px" }}>
        <Box
          css={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Paper
            elevation={0}
            css={{ alignContent: "center", borderRadius: 10, width: "100%" }}
          >
            <TotalPublicationsBarChart data={{ data: overviewData }} />
          </Paper>
        </Box>
      </div>
      {/* Category Section ------------- */}
      <div css={{ marginTop: 10 }}>
        <PageToolbar>
          <Typography>By Category</Typography>
          <div css={{ marginLeft: "3%" }}>
            <Dropdown
              options={categoryList}
              label="Category"
              defaultValue="Engineering, Biomedical"
              ctx="Overview"
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
              width: "40%",
              marginLeft: "5%",
            }}
          >
            <PublicationsByCategoryPie />
          </Paper>
        </Box>
      </div>
    </OverviewProvider>
  );
};

export default Overview;
