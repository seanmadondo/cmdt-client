/** @jsxImportSource @emotion/react */
import { Celebration } from "@mui/icons-material";
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
import React from "react";

function createTotalPublicationData(source: string, count: number) {
  return { source, count };
}

const rows = [
  createTotalPublicationData("UoA", 87620),
  createTotalPublicationData("MU", 33558),
  createTotalPublicationData("VUW", 27976),
  createTotalPublicationData("UoW", 15716),
  createTotalPublicationData("AUT", 11777),
  createTotalPublicationData("LU", 7218),
  createTotalPublicationData("CDHB", 6905),
  createTotalPublicationData("UoW", 15716),
  createTotalPublicationData("CI", 2941),
];

export default function TotalPublications() {
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
          {rows.map((row) => (
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
              <Typography>226980</Typography>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
