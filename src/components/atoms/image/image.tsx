import { FC } from "react";
import { clsx } from "clsx";
import styles from "./image.module.scss";

type Image = {
  src?: string;
  alt?: string;
  className?: string;
};
export const Image: FC<Image> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={clsx(styles[`${className}`])} />;
};
