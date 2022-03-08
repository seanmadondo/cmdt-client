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

function createTotalByCategoryData(
  category: string,
  university: string,
  count: number
) {
  return { category, university, count };
}

const rows = [
  createTotalByCategoryData("Biomedical engineering", "UoA", 87620),
  createTotalByCategoryData("Biomedical engineering", "UoC", 87620),
  createTotalByCategoryData("Biomedical engineering", "UoO", 87620),
  createTotalByCategoryData("Biomedical engineering", "AUT", 87620),
  createTotalByCategoryData("Biomedical engineering", "UoW", 87620),
  createTotalByCategoryData("Biomedical engineering", "MU", 87620),
  createTotalByCategoryData("Biomedical engineering", "VU", 87620),
];

export default function TotalByCategory() {
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
              <Typography>Category</Typography>
            </TableCell>
            <TableCell>
              <Typography>University</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>Count</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.category}>
              <TableCell component="th" scope="row">
                {row.category}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.university}
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
            <TableCell />
            <TableCell align="right">
              <Typography>226980</Typography>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
