import { FC } from "react";
import { clsx } from "clsx";
import styles from "./search-card.module.scss";
import { Text, Link, Image } from "@atoms";

export type SearchCardProps = {
  login: string;
  id: string;
  html_url: string;
  avatar_url: string;
};

export const SearchCard: FC<SearchCardProps> = ({ avatar_url, login, id, html_url }) => {
  return (
    <div className={clsx(styles[`search-card`])}>
      <Image src={avatar_url} alt="user avatar" />
      <Text className={"text-small"} textContent={login} />
      <Text className={"text-small"} textContent={id} />
      <Link className={"link-card"} href={html_url} textContent={html_url} target={"_blank"} />
    </div>
  );
};
