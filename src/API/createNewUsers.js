/** @format */

const createNewUsers = async (fname, lname, username, email, avatar) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fname: fname,
      lname: lname,
      username: username,
      email: email,
      avatar: avatar,
    }),
  };

  const createResponse = await fetch(
    "https://www.melivecode.com/api/users/create",
    requestOptions
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response;
    });
  return createResponse;
};

export default createNewUsers;
