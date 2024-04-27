import { FC } from "react";
import { clsx } from "clsx";
import styles from "./user-card.module.scss";
import { Text, Image, Link } from "@atoms";

export type UserCardProps = {
  login: string;
  id: string;
  html_url: string;
  avatar_url: string;
};

export const UserCard: FC<UserCardProps> = ({ login, id, html_url, avatar_url }) => {
  return (
    <div className={clsx(styles[`user-card`])}>
      <Text className={"text-small"} textContent={login} />
      <Text className={"text-small"} textContent={id} />
      <Link className={"link-card"} href={html_url} textContent={html_url} target={"_blank"} />
      <Image src={avatar_url} alt={"avatar"} className={`avatar`} />
    </div>
  );
};
