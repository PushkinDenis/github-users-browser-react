import { FC, useEffect, useState } from "react";
import { clsx } from "clsx";
import styles from "./main.module.scss";
import { UserCard, UserCardProps } from "@organisms";
import { fetchData } from "@helpers";
import { Pagination } from "@atoms";

type MainProps = {
  buttonClicked: boolean;
};

export const Main: FC<MainProps> = ({ buttonClicked }) => {
  const [users, setUsers] = useState<UserCardProps[]>([]);

  useEffect(() => {
    if (buttonClicked) {
      fetchData("200").then((result) => {
        setUsers(() => result);
        return users;
      });
    }
  }, [buttonClicked]);

  return (
    <>
      <div className={clsx(styles.main)}>
        {buttonClicked && users && (
          <div>
            {users.map((val, index) => (
              <div>
                <UserCard login={val.login} id={val.id} html_url={val.html_url} avatar_url={val.avatar_url} key={index} />
              </div>
            ))}
            <Pagination />
          </div>
        )}
      </div>
    </>
  );
};
