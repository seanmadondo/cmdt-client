/** @jsxImportSource @emotion/react */
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useNetworkContext } from "../../../contexts/NetworkProvider";

interface RowDataProps {
  category: string;
  source: string;
  target: string;
  count: number;
  percentage: number;
}

export default function TotalByCategory() {
  //Get data from overview context
  let data: any = useNetworkContext();

  //Process & populate table data
  const rowData: RowDataProps[] = Object.values(
    data.categoryData
  )[0] as RowDataProps[];

  //calculate total count
  function calculateTotalCount() {
    let totalCount: number = 0;
    rowData.map(({ category, source, count, percentage }) => {
      totalCount += count;
    });
    return totalCount;
  }

  return (
    <TableContainer component={Paper} css={{ height: "360px" }}>
      <Table size="small">
        <TableHead
          css={{
            backgroundColor: "#808692",
            "& 	.MuiTypography-root": { color: "white" },
          }}
        >
          <TableRow>
            <TableCell>
              <Typography>Category</Typography>
            </TableCell>
            <TableCell>
              <Typography>Source</Typography>
            </TableCell>
            <TableCell>
              <Typography>Target</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>Count</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row: RowDataProps, id) => (
            <TableRow key={`${row.source}-${id}`}>
              <TableCell component="th" scope="row">
                {row.category}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.source}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.target}
              </TableCell>
              <TableCell align="right">{row.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter
          css={{
            backgroundColor: "#808692",
            "& 	.MuiTypography-root": { color: "white" },
          }}
        >
          <TableRow>
            <TableCell>
              <Typography>Total</Typography>
            </TableCell>
            <TableCell />
            <TableCell />
            <TableCell align="right">
              <Typography>{calculateTotalCount()}</Typography>
            </TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </TableContainer>
  );
}
