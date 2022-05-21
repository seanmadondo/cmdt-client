/** @jsxImportSource @emotion/react */
import {
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";
import { useNetworkContext } from "../../contexts/NetworkProvider";

interface MultiSelectDropdownProps {
  label?: string;
  options: string[];
  defaultValue: string;
  ctx?: "Fingerprint" | "Overview" | "Network" | "Grants";
}

const ITEM_HEIGHT = 100;
const ITEM_PADDING_TOP = 2;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const MultiSelectDropdown = ({
  label,
  options,
  defaultValue,
  ctx,
}: MultiSelectDropdownProps) => {
  const [selected, setSelected] = useState<string[]>([...options]);
  const isAllSelected =
    options.length > 0 && selected.length === options.length;
  let networkContext: any = useNetworkContext();

  const handleChange = (event: SelectChangeEvent<typeof selected>) => {
    const value = event.target.value;
    if (value[value.length - 1] === "ALL") {
      setSelected(selected.length === options.length ? [] : options);
    } else {
      setSelected(typeof value === "string" ? value.split(",") : value);
    }
    //update the query data
    if (ctx === "Network") {
      if (value.includes("ALL") || value.length === 0) {
        networkContext.updateQuery([], label);
      } else {
        networkContext.updateQuery(value, label);
      }
    }
  };

  return (
    <Box css={{ minWidth: "250px", maxWidth: "250px" }}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          css={{
            height: "55px",
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label={label}
          multiple
          renderValue={(selected) => selected.join(", ")}
          onChange={handleChange}
          MenuProps={MenuProps}
        >
          <MenuItem value="ALL">
            <ListItemIcon>
              <Checkbox
                checked={isAllSelected}
                indeterminate={
                  selected.length > 0 && selected.length < options.length
                }
              />
            </ListItemIcon>
            <ListItemText primary="ALL" />
          </MenuItem>
          {options.map((option) => {
            return (
              <MenuItem key={option} value={option}>
                <div
                  css={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <ListItemIcon>
                    <Checkbox checked={selected.indexOf(option) > -1} />
                  </ListItemIcon>
                  <ListItemText primary={option} />
                </div>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
