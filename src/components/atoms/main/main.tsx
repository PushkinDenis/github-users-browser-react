import { FC, useContext, useEffect } from "react";
import { clsx } from "clsx";
import styles from "./main.module.scss";
import { UserCard, UserCardProps } from "@organisms";
import { Pagination } from "@atoms";
import { UsersContext, PageContext } from "@/App.tsx";
import { useLocation } from "react-router-dom";
import { fetchData } from "@helpers";

export const Main: FC = () => {
  const { users, setUsers } = useContext<any>(UsersContext);
  const { page, setPage } = useContext<any>(PageContext);
  const location = useLocation();

  useEffect(() => {
    setPage(() => location.search.slice(6));
    fetchData(`100`, `${page}00`).then((result) => setUsers(result));
  }, [location.search, page]);

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
