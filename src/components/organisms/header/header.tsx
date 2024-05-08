import { FC } from "react";
import clsx from "clsx";
import styles from "./header.module.scss";
import { Image, Input } from "@atoms";
import { Navbar } from "@organisms";
import { useMediaQuery } from "react-responsive";

export const Header: FC = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <>
      <header className={clsx(styles.header)}>
        {isDesktopOrLaptop && (
          <>
            <Image src={`./icons/github-purple-icon.svg`} alt={"logo"} className={"logo"} />
            <Navbar />
            <Input />
          </>
        )}
        {isTabletOrMobile && (
          <>
            <Image src={`./icons/github-purple-icon.svg`} alt={"logo"} className={"logo"} />
            <Navbar />
          </>
        )}
      </header>
    </>
  );
};
