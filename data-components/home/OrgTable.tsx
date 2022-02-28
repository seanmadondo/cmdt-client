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
import React from "react";

function createOrgTableData(organisation: string, abbreviation: string) {
  return { organisation, abbreviation };
}

const rows = [
  createOrgTableData("University of Auckland", "UoA"),
  createOrgTableData("Auckland University of Technology", "AUT"),
  createOrgTableData("Massey University", "MU"),
  createOrgTableData("Victoria University of Wellington", "VUW"),
  createOrgTableData("Callaghan Innovation", "CI"),
  createOrgTableData("University of Canterbury", "UoC"),
  createOrgTableData("University of Otago", "UoO"),
  createOrgTableData("University of Waikato", "UoW"),
  createOrgTableData("Lincoln University", "LU"),
  createOrgTableData("Auckland Bioengineering Institute", "ABI"),
  createOrgTableData("Canterbury District Health Board", "CDHB"),
];

export default function OrgTable() {
  return (
    <TableContainer component={Paper}>
      <Table size="medium">
        <TableHead
          css={{
            backgroundColor: "#808692",
            "& 	.MuiTypography-root": { color: "white" },
          }}
        >
          <TableRow>
            <TableCell>
              <Typography>Organisation</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>Abbreviation</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.organisation}>
              <TableCell component="th" scope="row">
                {row.organisation}
              </TableCell>
              <TableCell align="right">{row.abbreviation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
