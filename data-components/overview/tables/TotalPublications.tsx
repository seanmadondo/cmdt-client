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

interface TotalPublicationsProps {
  data: any;
}

interface RowDataProps {
  source: string;
  count: number;
}

export const TotalPublications = ({ data }: TotalPublicationsProps) => {
  //Process & populate table data
  const rowData: RowDataProps[] = Object.values(data.data)[0] as RowDataProps[];

  //calculate total count
  function calculateTotalCount() {
    let totalCount: number = 0;
    rowData.map(({ source, count }) => {
      totalCount += count;
    });
    return totalCount;
  }

  return (
    <TableContainer component={Paper}>
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
            <TableCell align="right">
              <Typography>Total</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row: RowDataProps) => (
            <TableRow key={row.source}>
              <TableCell component="th" scope="row">
                {row.source}
              </TableCell>
              <TableCell align="right">{row.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter
          css={{
            backgroundColor: "#808692",
            "& 	.MuiTypography-root": { color: "white" },
          }}
        >
          <TableRow>
            <TableCell>
              <Typography>Total</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>{calculateTotalCount()}</Typography>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
