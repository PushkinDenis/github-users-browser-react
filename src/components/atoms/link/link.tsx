import { FC } from "react";
import { clsx } from "clsx";
import styles from "./link.module.scss";

type Link = {
  href: string;
  className?: string;
  textContent?: string;
  target?: string;
};

export const Link: FC<Link> = ({ href, className, textContent, target }) => {
  return (
    <a href={href} className={clsx(styles[`${className}`])} target={target}>
      {textContent}
    </a>
  );
};
