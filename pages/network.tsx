/** @jsxImportSource @emotion/react */
import { Box, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Dropdown } from "../components/Dropdown";
import { MultiSelectDropdown } from "../components/MultiSelectDropdown";
import { PageToolbar } from "../components/PageToolbar";
import { NetworkProvider } from "../contexts/NetworkProvider";
import { DependencyWheelChart } from "../data-components/network/charts/DependancyWheelChart";
import { DependencyWheelChartByCategory } from "../data-components/network/charts/DependencyWheelByCategory";
import { NetworkBarChart } from "../data-components/network/charts/NetworkBar";
import NetworkCategoryTable from "../data-components/network/tables/NetworkCategoryTable";
import { NetworkTable } from "../data-components/network/tables/NetworkTable";
import { MAIN_SOURCE_ABBR, NZ_ORGS } from "../utils/constants";

interface CatergoryListProps {
  categoryList: string[];
}

export async function getServerSideProps() {
  //Fetch
  const [networkData, categoryData] = await Promise.all([
    fetch("https://nz-innovation-api.herokuapp.com/organisation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sources: MAIN_SOURCE_ABBR,
        targets: NZ_ORGS,
      }),
    }).then((r) => r.json()),
    fetch("https://nz-innovation-api.herokuapp.com/subject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sources: ["ABI"],
        targets: MAIN_SOURCE_ABBR,
        categories: ["Engineering, Biomedical"],
      }),
    }).then((r) => r.json()),
  ]);

  //Pass data into page
  return {
    props: { networkData, categoryData },
  };
}

const Network: NextPage = ({ networkData, categoryData }: any) => {
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

  const areas = ["NZ Universities"]; // TODO: Re-add worldwide option later.
  return (
    <NetworkProvider value={{ networkData, categoryData }}>
      <PageToolbar>
        <Typography>Network of Organisations</Typography>
        <div css={{ marginLeft: "3%" }}>
          <MultiSelectDropdown
            options={MAIN_SOURCE_ABBR}
            label="Source"
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
      <div>
        <Box
          css={{
            display: "flex",
            alignItems: "center",
            paddingTop: "35px",
            jsutifyContent: "center",
          }}
        >
          <Paper
            elevation={0}
            css={{ alignContent: "center", borderRadius: 10, width: "100%" }}
          >
            <DependencyWheelChart data={{ data: networkData }} />
          </Paper>
        </Box>
      </div>
      <div css={{ marginTop: 35 }}>
        <PageToolbar>
          <Typography>By Category</Typography>
          <div css={{ marginLeft: "3%" }}>
            <Dropdown
              options={categoryList}
              label="Category"
              defaultValue="Engineering, Biomedical"
              ctx="NetworkCategory"
            />
          </div>
          <div css={{ marginLeft: "3%" }}>
            <Dropdown
              options={MAIN_SOURCE_ABBR}
              label="Source"
              defaultValue="ABI"
              ctx="NetworkCategory"
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
            <NetworkCategoryTable />
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
            <DependencyWheelChartByCategory />
          </Paper>
        </Box>
      </div>
    </NetworkProvider>
  );
};

export default Network;
