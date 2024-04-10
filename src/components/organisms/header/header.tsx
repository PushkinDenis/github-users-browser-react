import { FC } from "react";
import clsx from "clsx";
import styles from "./header.module.scss";
import { Button, Input } from "@atoms";

export const Header: FC = () => {
  return (
    <>
      <header className={clsx(styles.header)}>
        <Button type={"submit"} textContent={"Кнопка"} />
        <Button type={"submit"} className={"button1"} textContent={"Кнопка"} />
        <Input type={"text"} placeholder={"Find user"} />
        <Input type={"checkbox"} />
      </header>
    </>
  );
};
