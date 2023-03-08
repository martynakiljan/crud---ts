/** @format */

import React from "react";
import { Typography, Button } from "@mui/material";
import Modal from "./Modal";
import { FormPropsModalType } from "./Form";

const DefaultResponseType = {
  status: string,
  message: string,
};
const ModalRemoveUser = (
  { isOpen, setIsOpen }: FormPropsModalType,
  { response }: DefaultResponseType
) => {
  const { status, message } = response;

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Typography
        id="fade-modal-dialog-title"
        component="h2"
        level="inherit"
        fontSize="24px"
        mb="0.25em"
        color="secondary"
        text-align="center"
        width="100%"
      >
        Remove User:
      </Typography>
      <p>
        {status}: {message}
      </p>
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

export default ModalRemoveUser;
