/** @format */
import detailUser from "./detailUser";

const updateUser = async (fname, lname, username, email, id) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: id,
      fname: fname,
      lname: lname,
      username: username,
      email: email,
    }),
  };

  const createResponse = await fetch(
    "https://www.melivecode.com/api/users/update",
    requestOptions
  )
    .then((response) => response.json())
    .then((response) => {
      detailUser(id);
      return response;
    });
  return createResponse;
};

export default updateUser;
