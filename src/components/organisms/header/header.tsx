import { FC } from "react";
import clsx from "clsx";
import styles from "./header.module.scss";
import { Image, Input } from "@atoms";
import { Navbar } from "@organisms";

type HeaderProps = {
  onButtonClick: () => void;
};

export const Header: FC<HeaderProps> = ({ onButtonClick }) => {
  return (
    <>
      <header className={clsx(styles.header)}>
        <Image src={`./icons/github-purple-icon.svg`} alt={"logo"} className={"logo"} />
        <Navbar onButtonClick={onButtonClick} />
        <Input />
      </header>
    </>
  );
};
