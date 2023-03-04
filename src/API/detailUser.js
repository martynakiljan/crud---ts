/** @format */

const detailUser = async (fname, lname, username, email, id, avatar) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: id,
      fname: fname,
      lname: lname,
      username: username,
      email: email,
      avatar: avatar,
    }),
  };

  const createResponse = await fetch(
    "https://www.melivecode.com/api/users/{id}",
    requestOptions
  )
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
  return createResponse;
};

export default detailUser;
