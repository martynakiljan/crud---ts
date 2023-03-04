/** @format */

import React from "react";
import { Typography, Button } from "@mui/material";
import Modal from "./Modal";

const ModalAlert = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Typography
        id="fade-modal-dialog-title"
        component="h2"
        level="inherit"
        fontSize="18px"
        mb="0.25em"
        color="secondary"
        text-align="center"
        width="100%"
      >
        unfortunately you can't edit users with id 1-12
      </Typography>
      <Button
        onClick={() => window.location.reload()}
        variant="contained"
        type="button"
        color="secondary"
      >
        OK
      </Button>
    </Modal>
  );
};

export default ModalAlert;
