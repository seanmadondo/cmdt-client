/** @jsxImportSource @emotion/react */
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { useFingerprintContext } from "../../contexts/FingerprintProvider";

interface DropdownProps {
  label?: string;
  options: string[];
  defaultValue?: string;
  ctx: "Fingerprint" | "Overview" | "Network" | "Grants";
}

function getCurrentContext(ctx: string) {
  if (ctx === "Fingerprint") {
    return useFingerprintContext();
  }
}

export const Dropdown = ({
  label,
  options,
  defaultValue,
  ctx,
}: DropdownProps) => {
  const [source, setSource] = React.useState(defaultValue ?? "");

  const myContext: any = getCurrentContext(ctx);

  const handleChange = (event: SelectChangeEvent) => {
    setSource(event.target.value as string);
    myContext.updateQuery(event.target.value, label);
  };

  return (
    <Box css={{ minWidth: "250px" }}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          css={{
            height: "55px",
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={source}
          label={label}
          onChange={handleChange}
        >
          {options.map((option) => {
            return (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
