import { FC } from "react";
import clsx from "clsx";
import styles from "./navbar.module.scss";
import { Button, Link } from "@atoms";

type NavbarProps = {
  onButtonClick: () => void;
};

export const Navbar: FC<NavbarProps> = ({ onButtonClick }) => {
  return (
    <>
      <nav className={clsx(styles.navbar)}>
        <Link className={"link"} href={"https://github.com/"} textContent={"GitHub"} target={"__blank"} />
        <Link className={"link"} href={"https://docs.github.com/ru/rest?apiVersion=2022-11-28"} textContent={"GitHub API"} target={"__blank"} />
        <Button type={"button"} textContent={"Users"} onClick={onButtonClick} />
        <button onClick={onButtonClick}>Click me</button>
      </nav>
    </>
  );
};
