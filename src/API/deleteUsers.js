/** @format */

import fetchUsers from "./fetchUsers";

const deleteUsers = async (id) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      Accept: "application/form-data",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  };

  const response = await fetch(
    "https://www.melivecode.com/api/users/delete",
    requestOptions
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      fetchUsers();
      return response;
    });
  return response;
};

export default deleteUsers;
