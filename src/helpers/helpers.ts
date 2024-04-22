import { UserCardProps } from "@organisms";

export const fetchData = async (usersPerPage: string) => {
  const response = await fetch(`https://api.github.com/users?since=0&per_page=${usersPerPage}`);
  return await response.json();
};

export const createCard = async () => {
  const userArr = [];
  const users = await fetchData("100");
  for (const user of users) {
    const gitUser: UserCardProps = {
      login: user.login,
      id: user.id,
      url: user.html_url,
      avatar_url: user["avatar_url"],
    };
    userArr.push(gitUser);
  }
  console.log(userArr);
  return userArr;
};
