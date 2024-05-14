import { FC, useContext, useEffect } from "react";
import { clsx } from "clsx";
import styles from "./main.module.scss";
import { UserCard, UserCardProps } from "@organisms";
import { Pagination } from "@atoms";
import { UsersContext, PageContext } from "@/App.tsx";
import { useLocation, useSearchParams } from "react-router-dom";
import { fetchData } from "@helpers";

export const Main: FC = () => {
  const { users, setUsers } = useContext<any>(UsersContext);
  const { page, setPage } = useContext<any>(PageContext);
  const [searchParams] = useSearchParams("");
  const location = useLocation();

  useEffect(() => {
    const params = location.search.slice(6);
    setPage(params);
    if (params !== "" && params !== "1") {
      try {
        fetchData(`100`, `${params}00`).then((result) => setUsers(result));
      } catch (error) {
        console.log(error);
      }
    } else if (params === "1") {
      try {
        fetchData(`100`, `0`).then((result) => setUsers(result));
      } catch (error) {
        console.log(error);
      }
    }
  }, [location.search, page, searchParams]);

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
