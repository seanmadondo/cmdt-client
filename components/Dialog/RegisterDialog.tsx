/** @jsxImportSource @emotion/react */
import { Button, Typography } from "@mui/material";
import { Dialog } from ".";

interface RegisterDialogProps {
  open: boolean;
  handleClose: () => void;
}

export const RegisterDialog = ({ open, handleClose }: RegisterDialogProps) => {
  const header = "Register to access NZ Innovation";
  const content = (
    <>
      <p> Registration Process Here</p>
    </>
  );

  const footer = (
    <Button
      css={{
        backgroundColor: "#EC1C78",
        marginLeft: "10px",
        color: "white",
        boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.15)",
        "&:hover": {
          backgroundColor: "#EC1C78",
          transition: "all .1s ease-in-out",
          transform: "scale(1.1)",
        },
      }}
    >
      <Typography css={{ minWidth: "100px" }}>Register</Typography>
    </Button>
  );

  return (
    <Dialog
      header={header}
      content={content}
      footer={footer}
      open={open}
      onClose={handleClose}
    />
  );
};
