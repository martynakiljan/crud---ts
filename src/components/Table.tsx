/** @format */

import Context from "../utilis/context";

import React, { useState, useContext } from "react";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Table,
  CircularProgress,
  Avatar,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import deleteUsers from "../API/deleteUsers";
import ModalRemoveUser from "./ModalRemoveUser";
import ModalEditUser from "./ModalEditUser";
import ModalAlert from "./ModalAlert";
import fetchUserByID from "../API/fetchUserByID";

const TableContent = () => {
  const { users } = useContext(Context);

  const [deleteUserResponse, setDeleteUserResponse] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [userData, setUserData] = useState(null);

  const renderMedia = (avatar) => {
    return <Avatar justify="center" src={avatar} />;
  };

  const deleteUser = (id) => {
    getResponseFromAPI(id);
  };

  const getResponseFromAPI = async (id) => {
    const response = await deleteUsers(id);
    setDeleteUserResponse(response);
    setIsOpen(true);
  };

  const fetchUserDetails = async (id) => {
    if (id < 12) {
      setIsOpenAlert(true);
    } else {
      const usersDetailsResponse = await fetchUserByID(id);
      if (usersDetailsResponse.status === "ok") {
        setUserData(usersDetailsResponse.user);
        setIsOpen(true);
      }
    }
  };

  const renderButtons = (id: string) => {
    return (
      <>
        <div>
          <Button
            variant="text"
            color="secondary"
            onClick={() => fetchUserDetails(id)}
          >
            EDIT
          </Button>
          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => deleteUser(id)}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </div>
      </>
    );
  };

  return users ? (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Avatar</TableCell>
              <TableCell>First</TableCell>
              <TableCell>Last</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map(({ id, avatar, fname, lname, username, email }) => (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" className="table-row-id">
                  {id}
                </TableCell>
                <TableCell align="right">{renderMedia(avatar)}</TableCell>
                <TableCell align="left">{fname}</TableCell>
                <TableCell align="left">{lname}</TableCell>
                <TableCell align="left">{username}</TableCell>
                <TableCell align="left">{email}</TableCell>
                <TableCell align="left">{renderButtons(id)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {deleteUserResponse && (
        <ModalRemoveUser
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          response={deleteUserResponse}
        />
      )}
      {userData && (
        <ModalEditUser
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          userData={userData}
        />
      )}
      <ModalAlert isOpen={isOpenAlert} setIsOpen={setIsOpenAlert} />
    </>
  ) : (
    <Box display="flex" justifyContent="center" alignItems="center">
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default TableContent;
