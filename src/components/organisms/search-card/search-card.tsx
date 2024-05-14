import { FC } from "react";
import { clsx } from "clsx";
import styles from "./search-card.module.scss";
import { Text, Link } from "@atoms";

export type SearchCardProps = {
  login: string;
  id: string;
  html_url: string;
};

export const SearchCard: FC<SearchCardProps> = ({ login, id, html_url }) => {
  return (
    <div className={clsx(styles[`search-card`])}>
      <Text className={"text-small"} textContent={login} />
      <Text className={"text-small"} textContent={id} />
      <Link className={"link-card"} href={html_url} textContent={html_url} target={"_blank"} />
    </div>
  );
};
