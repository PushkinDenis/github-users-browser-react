export const fetchData = async () => {
  const response = await fetch("https://api.github.com/users?since=0&per_page=100");
  const json = await response.json();
  console.log(json);
};
