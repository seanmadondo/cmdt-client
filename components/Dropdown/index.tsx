/** @jsxImportSource @emotion/react */
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

interface DropdownProps {
  label?: string;
  placeholder?: string;
  options: string[];
  handleChange?: () => void;
}

export const Dropdown = ({
  label,
  placeholder,
  options,
  handleChange,
}: DropdownProps) => {
  return (
    <Box css={{ minWidth: "250px" }}>
      <FormControl fullWidth>
        <InputLabel>{placeholder}</InputLabel>
        <Select
          labelId="select-component"
          id="select-component"
          value={""}
          label={label}
          onChange={handleChange}
        >
          {options.map((option) => {
            <MenuItem value={option}>{option}</MenuItem>;
          })}
          <MenuItem value={10}>{"ja"}</MenuItem>;
        </Select>
      </FormControl>
    </Box>
  );
};
