import { FC } from "react";
import { clsx } from "clsx";
import styles from "./image.module.scss";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export const Image: FC<ImageProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={clsx(styles[`${className}`])} />;
};
