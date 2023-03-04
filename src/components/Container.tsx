import Table from "./Table";
import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import ModalAddUser from "./ModalAddUser";
import { Wrapper } from "../utilis/styledcomponents";

const Container = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <Wrapper>
      <Typography variant="h4" component="h4">
        Users
      </Typography>
      <Stack direction="row" justifyContent="end">
        <Button
          color="secondary"
          variant="outlined"
          size="medium"
          sx={{ mb: 7 }}
          onClick={() => setIsOpen(true)}
        >
          CREATE NEW USER
        </Button>
        <ModalAddUser isOpen={isOpen} setIsOpen={setIsOpen} />
      </Stack>
      <Table />
    </Wrapper>
  );
};

export default Container;
