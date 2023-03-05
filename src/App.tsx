/** @format */

import React from "react";
import fetchUsers from "./API/fetchUsers";
import Topbar from "./components/Topbar";
import Container from "./components/Container";
import Context from "./utilis/context";
import { UserDataType, FormErrorsType } from "./components/Form";

const defaultContext = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  avatar: "",
};

const App = () => {
  const [users, setUsers] = React.useState<UserDataType[] | null>(null);
  const [formErrors, setFormErrors] = React.useState<FormErrorsType | null>(
    defaultContext
  );

  const getFetch = async () => {
    const users = await fetchUsers();
    setUsers(users);
  };

  const setFormErrorsWrapper = (name: string, value: string) => {
    setFormErrors({
      ...formErrors,
      [name]: value,
    });
  };

  React.useEffect(() => {
    getFetch();
  }, []);

  return (
    <>
      <Context.Provider value={{ users, formErrors, setFormErrorsWrapper }}>
        <Topbar position="static"></Topbar>
        <Container sx={{ minHeight: "100vh" }} />
      </Context.Provider>
    </>
  );
};

export default App;
