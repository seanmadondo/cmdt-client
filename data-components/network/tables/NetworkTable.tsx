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

interface NetworkTableProps {
  data: any;
}

interface RowDataProps {
  source: string;
  target: string;
  count: number;
}

export const NetworkTable = ({ data }: NetworkTableProps) => {
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
              <TableCell align="right">{row.count}</TableCell>
              <TableCell align="right">%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
