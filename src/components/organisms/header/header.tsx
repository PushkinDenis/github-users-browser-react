import { FC } from "react";
import clsx from "clsx";
import styles from "./header.module.scss";
import { Button, Input, Image } from "@atoms";

export const Header: FC = () => {
  return (
    <>
      <header className={clsx(styles.header)}>
        <Image src={`./icons/github-purple-icon.svg`} alt={"logo"} className={"logo"} />
        <Button type={"button"} textContent={"Кнопка"} />
        <Input type={"text"} placeholder={"Find user"} />
      </header>
    </>
  );
};
