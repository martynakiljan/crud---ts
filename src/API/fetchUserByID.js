/** @format */

const fetchUserByID = async (id) => {
  const API_URL = `https://www.melivecode.com/api/users/${id}`;

  return await fetch(API_URL)
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((error) => console.warn(error));
};

export default fetchUserByID;
