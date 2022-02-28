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

export const CategorySelect = () => {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value as string);
  };

  return (
    <Box css={{ minWidth: "250px" }}>
      <FormControl fullWidth>
        <InputLabel>Select Category</InputLabel>
        <Select
          labelId="category"
          id="overview-category"
          value={selectedValue}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>All</MenuItem>
          <MenuItem value={20}>BioTech Option</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
