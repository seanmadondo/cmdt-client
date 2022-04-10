/** @jsxImportSource @emotion/react */
import {
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

import { ReactNode } from "react";

interface DialogProps {
  header?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
  open: boolean;
  dialogWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  onClose: () => void;
}

/* Shareable Dialog Component*/
export const Dialog = ({
  header,
  content,
  footer,
  dialogWidth,
  open,
  onClose,
}: DialogProps): JSX.Element => {
  return (
    <MuiDialog
      css={{ margin: 5 }}
      open={open}
      onClose={onClose}
      maxWidth={dialogWidth}
      fullWidth
    >
      <DialogTitle css={{ borderBottom: `0.5px solid #d3d3d3` }}>
        <Typography css={{ fontSize: "17px", color: "#41255D" }}>
          {header}
        </Typography>
      </DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions css={{ borderTop: `0.5px solid #d3d3d3` }}>
        {footer}
      </DialogActions>
    </MuiDialog>
  );
};
