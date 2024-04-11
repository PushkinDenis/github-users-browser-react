import { FC } from "react";
import clsx from "clsx";
import styles from "./navbar.module.scss";
import { Button, Input, Link } from "@atoms";

export const Navbar: FC = () => {
  return (
    <>
      <nav className={clsx(styles.navbar)}>
        <Link className={"link"} href={"https://github.com/"} textContent={"GitHub"} target={"__blank"} />
        <Link className={"link"} href={"https://docs.github.com/ru/rest?apiVersion=2022-11-28"} textContent={"GitHub API"} target={"__blank"} />
        <Button type={"button"} textContent={"Users"} />
        <Input type={"text"} placeholder={"Find user"} />
      </nav>
    </>
  );
};
