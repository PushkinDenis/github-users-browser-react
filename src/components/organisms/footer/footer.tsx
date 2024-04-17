import { FC } from "react";
import clsx from "clsx";
import styles from "./footer.module.scss";
import { Text } from "@atoms";

export const Footer: FC = () => {
  return (
    <>
      <footer className={clsx(styles.footer)}>
        <Text className={"text-small"} textContent={String.fromCharCode(169) + `2024 All rights reserved`} />
      </footer>
    </>
  );
};
