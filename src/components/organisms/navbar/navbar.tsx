import { FC } from "react";
import clsx from "clsx";
import styles from "./navbar.module.scss";
import { Button, Link } from "@atoms";
import { useMediaQuery } from "react-responsive";

export const Navbar: FC = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <>
      <nav className={clsx(styles.navbar)}>
        {isTabletOrMobile && <Button type={"button"} textContent={"Users"} />}
        {isDesktopOrLaptop && (
          <>
            <Link className={"link"} href={"https://github.com/"} textContent={"GitHub"} target={"__blank"} />
            <Link className={"link"} href={"https://docs.github.com/ru/rest?apiVersion=2022-11-28"} textContent={"GitHub API"} target={"__blank"} />
            <Button type={"button"} textContent={"Users"} />
          </>
        )}
      </nav>
    </>
  );
};
