import { FC, useContext, useEffect, useState } from "react";
import { clsx } from "clsx";
import styles from "./main.module.scss";
import { UserCard, UserCardProps } from "@organisms";
import { fetchData } from "@helpers";
import { Pagination } from "@atoms";
import { ButtonClickContext } from "@/App.tsx";

export const Main: FC = () => {
  const [users, setUsers] = useState<UserCardProps[]>([]);
  const { buttonClick } = useContext<any>(ButtonClickContext);

  useEffect(() => {
    if (buttonClick) {
      fetchData("200").then((result) => {
        setUsers(() => result);
        return users;
      });
    }
  }, [buttonClick]);

  return (
    <>
      <div className={clsx(styles.main)}>
        {buttonClick && users && (
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
