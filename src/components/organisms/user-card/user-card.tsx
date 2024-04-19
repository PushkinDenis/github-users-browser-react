import { FC, useEffect, useState } from "react";
import { clsx } from "clsx";
import styles from "./user-card.module.scss";
import { Text, Image } from "@atoms";

export type UserCardProps = {
  login: string;
  id: string;
  url: string;
  avatar: string;
};

export const UserCard: FC<UserCardProps> = ({ login, id, url, avatar }) => {
  return (
    <>
      <div className={clsx(styles[`user-card`])}>
        <Text className={"text-small"} textContent={"text-small"} />
        <Text className={"text-small"} textContent={"text-small"} />
        <Text className={"text-small"} textContent={"text-small"} />
        <Image src={avatar!} alt={"avatar"} className={"text-small"} />
      </div>
    </>
  );
};
