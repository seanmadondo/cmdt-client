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
import React from "react";

function createResearchAreasData(
  source: string,
  target: string,
  count: number
) {
  return { source, target, count };
}

const rows = [
  createResearchAreasData("Engineering", "ALL", 8762),
  createResearchAreasData("Electrical", "ALL", 3355),
  createResearchAreasData("Physiology", "ALL", 2797),
  createResearchAreasData("Biophysics", "ALL", 1571),
  createResearchAreasData("Mathematical", "ALL", 1177),
  createResearchAreasData("Cardiac", "ALL", 721),
  createResearchAreasData("NeuroSciences", "ALL", 690),
  createResearchAreasData("Clinical", "ALL", 1571),
  createResearchAreasData("Biomedical1", "ALL", 294),
];

export default function ResearchAreasTable() {
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
            <TableCell>
              <Typography>Target</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>Total</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.source}>
              <TableCell component="th" scope="row">
                {row.source}
              </TableCell>
              <TableCell>{row.target}</TableCell>
              <TableCell align="right">{row.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
