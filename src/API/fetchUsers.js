
const fetchUsers = async () => {
  const API_URL = "https://www.melivecode.com/api/users";

  return await fetch(API_URL)
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((error) => console.warn(error));
};

export default fetchUsers;
