/** @jsxImportSource @emotion/react */
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useFingerprintContext } from "../../contexts/FingerprintProvider";

// interface ResearchAreasTableProps {
//   data: any;
// }

interface RowDataProps {
  source: string;
  target: string;
  category: string;
  count: number;
  percentage: number;
}

export default function ResearchAreasTable() {
  // const myContext: any = useFingerprintContext();
  const [data, setData] = useState<any>(useFingerprintContext());
  //Get data from fingerprint context
  //let data: any = useFingerprintContext();

  // console.log(myContext);
  // useEffect(() => {
  //   if (myContext) {
  //     myContext.data !== data && setData(myContext.data);
  //   }
  // }, [data, setData, myContext]);

  //Process & populate table data
  const rowData: RowDataProps[] = Object.values(data.data)[0] as RowDataProps[];

  return (
    <TableContainer component={Paper} css={{ height: "650px" }}>
      <Table size="small">
        <TableHead
          css={{
            backgroundColor: "#808692",
            "& 	.MuiTypography-root": { color: "white" },
          }}
        >
          <TableRow>
            <TableCell>
              <Typography>Source</Typography>
            </TableCell>
            <TableCell>
              <Typography>Target</Typography>
            </TableCell>
            <TableCell>
              <Typography>Categories</Typography>
            </TableCell>
            <TableCell>
              <Typography>Count</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>%</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row: RowDataProps, id) => (
            <TableRow key={`${row.source}-${id}`}>
              <TableCell component="th" scope="row">
                {row.source}
              </TableCell>
              <TableCell>{row.target}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell align="right">{row.count}</TableCell>
              <TableCell align="right">
                {parseFloat(row.percentage.toString()).toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
