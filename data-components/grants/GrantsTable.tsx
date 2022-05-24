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

interface GrantsTableProps {
  data: any;
}

interface RowDataProps {
  source: string;
  target: string;
  count: number;
  percentage: number;
}

export default function GrantsTable({ data }: GrantsTableProps) {
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
              <Typography>Target</Typography>
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
                {row.target}
              </TableCell>
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
