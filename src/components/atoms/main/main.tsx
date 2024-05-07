import { FC, useContext, useEffect } from "react";
import { clsx } from "clsx";
import styles from "./main.module.scss";
import { UserCard, UserCardProps } from "@organisms";
import { Pagination } from "@atoms";
import { UsersContext, PageContext, ClickContext } from "@/App.tsx";
import { useLocation } from "react-router-dom";
import { fetchData } from "@helpers";

export const Main: FC = () => {
  const { users, setUsers } = useContext<any>(UsersContext);
  const { page, setPage } = useContext<any>(PageContext);
  const { click } = useContext<any>(ClickContext);

  const location = useLocation();

  useEffect(() => {
    if (location.search.slice(6) !== "") {
      setPage(() => location.search.slice(6));
      location.search.slice(6) === "1" ? fetchData(`100`, `0`).then((result) => setUsers(result)) : fetchData(`100`, `${page}00`).then((result) => setUsers(result));
    }
    if (click === true) {
      setPage(() => location.search.slice(6));
      location.search.slice(6) === "1" ? fetchData(`100`, `0`).then((result) => setUsers(result)) : fetchData(`100`, `${page}00`).then((result) => setUsers(result));
    }
  }, [location.search, page, click]);

  return (
    <>
      <div className={clsx(styles.main)}>
        {users && users.length > 0 && (
          <>
            {users.map((val: UserCardProps, index: number) => (
              <div>
                <UserCard login={val.login} id={val.id} html_url={val.html_url} avatar_url={val.avatar_url} key={index} />
              </div>
            ))}
            <Pagination />
          </>
        )}
      </div>
    </>
  );
};
