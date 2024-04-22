export const fetchData = async (usersPerPage: string) => {
  const response = await fetch(`https://api.github.com/users?since=0&per_page=${usersPerPage}`);
  return await response.json();
};
