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

interface DropdownProps {
  label?: string;
  options: string[];
  defaultValue?: string;
}

export const Dropdown = ({ label, options, defaultValue }: DropdownProps) => {
  const [source, setSource] = React.useState(defaultValue ?? "");

  const handleChange = (event: SelectChangeEvent) => {
    setSource(event.target.value as string);
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
