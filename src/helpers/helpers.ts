import { UserCardProps } from "@organisms";

export const fetchData = async () => {
  const response = await fetch("https://api.github.com/users?since=0&per_page=100");
  const json = await response.json();
  return json;
};

export const createCard = async () => {
  const userArr = [];
  const users = await fetchData();
  for (const user of users) {
    const gitUser: UserCardProps = {
      login: user.login,
      id: user.id,
      url: user.html_url,
      avatar: user["avatar_url"],
    };
    userArr.push(gitUser);
  }
  console.log(userArr);
  return userArr;
};
