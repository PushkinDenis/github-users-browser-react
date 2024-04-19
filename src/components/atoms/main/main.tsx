import { FC, useEffect, useState } from "react";
import { clsx } from "clsx";
import styles from "./main.module.scss";
import { UserCard, UserCardProps } from "@organisms";

type MainProps = {
  buttonClicked: boolean;
};

export const Main: FC<MainProps> = ({ buttonClicked }) => {
  const [users, setUsers] = useState<UserCardProps[]>([]);

  useEffect(() => {
    if (buttonClicked) {
      const fetchUsers = async () => {
        const response = await fetch("https://api.github.com/users?since=0&per_page=10");
        return await response.json();
      };
      fetchUsers().then((result) => {
        setUsers(() => result);
        return users;
      });
    }
  }, [buttonClicked]);

  return (
    <>
      <div className={clsx(styles.main)}>
        <div>Button clicked: {buttonClicked ? "Yes" : "No"}</div>
        {buttonClicked && users && (
          <div>
            {users.map((val, index) => (
              <div>
                <UserCard login={val.login} id={val.id} url={val.url} avatar_url={val.avatar_url} key={index} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
