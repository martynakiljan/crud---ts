/** @format */

import React from "react";
import Typography from "@mui/material/Typography";
import Form from "./Form";
import Modal from "./Modal";
import PropTypes from "prop-types";

type FormPropsType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const ModalAddUser = ({ isOpen, setIsOpen }: FormPropsType) => {
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
        Add User:
      </Typography>

      <Form isOpen={isOpen} setIsOpen={setIsOpen} />
    </Modal>
  );
};

export default ModalAddUser;
