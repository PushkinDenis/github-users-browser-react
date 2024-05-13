export const fetchData = async (usersPerPage: string, page: string) => {
  const response = await fetch(`https://api.github.com/users?since=${page}&per_page=${usersPerPage}`);
  return await response.json();
};

export const fetchUsers = async (user: string) => {
  const response = await (await fetch(`https://api.github.com/users/${user}`)).json();
  console.log(response);
  return response;
};
