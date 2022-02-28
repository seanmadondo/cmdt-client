import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { PageToolbar } from "../components/PageToolbar";
import OrgTable from "../data-components/home/OrgTable";

const Home: NextPage = () => {
  return (
    <div>
      <PageToolbar>
        <Typography>Welcome to the Data Visualtion Platform</Typography>
      </PageToolbar>
      <div>
        <OrgTable />
      </div>
    </div>
  );
};

export default Home;
