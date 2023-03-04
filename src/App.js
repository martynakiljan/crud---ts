/** @format */

import React from "react";
import fetchUsers from "./API/fetchUsers";
import Topbar from "./components/Topbar";
import Container from "./components/Container";
import Context from "./utilis/context";

const defaultContext = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  avatar: "",
};

const App = () => {
  const [users, setUsers] = React.useState(null);
  const [formErrors, setFormErrors] = React.useState(defaultContext);

  const getFetch = async () => {
    const users = await fetchUsers();
    setUsers(users);
  };

  const setFormErrorsWrapper = (name, value) => {
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
