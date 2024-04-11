import { FC } from "react";
import clsx from "clsx";
import styles from "./header.module.scss";
import { Image } from "@atoms";
import { Navbar } from "@organisms";

export const Header: FC = () => {
  return (
    <>
      <header className={clsx(styles.header)}>
        <Image src={`./icons/github-purple-icon.svg`} alt={"logo"} className={"logo"} />
        <Navbar />
      </header>
    </>
  );
};
