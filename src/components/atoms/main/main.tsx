import { FC, useContext } from "react";
import { clsx } from "clsx";
import styles from "./main.module.scss";
import { UserCard, UserCardProps } from "@organisms";
import { Pagination } from "@atoms";
import { UsersContext } from "@/App.tsx";

export const Main: FC = () => {
  const { users } = useContext<any>(UsersContext);
  return (
    <>
      <div className={clsx(styles.main)}>
        {users && users.length > 0 && (
          <div>
            {users.map((val: UserCardProps, index: number) => (
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
