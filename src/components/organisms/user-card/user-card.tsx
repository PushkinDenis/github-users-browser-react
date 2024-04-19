import { FC } from "react";
import { clsx } from "clsx";
import styles from "./user-card.module.scss";

import { Text, Image } from "@atoms";

export type UserCardProps = {
  login: string;
  id: string;
  url: string;
  avatar_url: string;
};

export const UserCard: FC<UserCardProps> = ({ login, id, url, avatar_url }) => {
  return (
    <>
      <div className={clsx(styles[`user-card`])}>
        <Text className={"text-small"} textContent={login} />
        <Text className={"text-small"} textContent={id} />
        <Text className={"text-small"} textContent={url} />
        <Image src={avatar_url} alt={"avatar"} className={`avatar`} />
      </div>
    </>
  );
};
