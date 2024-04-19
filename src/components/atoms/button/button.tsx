import styles from "./button.module.scss";
import { FC } from "react";
import { clsx } from "clsx";

export type ButtonProps = {
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  textContent?: string;
  onClick: () => void;
};

export const Button: FC<ButtonProps> = ({ type, className, textContent, onClick }) => {
  // const [users, setUsers] = useState<any>([]);
  // const fetchUsers = async () => {
  //   const response = await fetch("https://api.github.com/users?since=0&per_page=10");
  //   const json = await response.json();
  //   setUsers((users) => json);
  //   console.log(users);
  // };
  return (
    <>
      <button type={type} className={clsx(styles.button, styles[`${className}`])} onClick={onClick}>
        {textContent}
      </button>
      {/*{users && (*/}
      {/*  <div>*/}
      {/*    <h2>*/}
      {/*      {users.map((val) => (*/}
      {/*        <div>*/}
      {/*          <div>{val.login}</div>*/}
      {/*          <div>{val.id}</div>*/}
      {/*          <div>{val.avatar}</div>*/}
      {/*          <div>{val.url}</div>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </h2>*/}
      {/*    /!* Render more data properties as needed *!/*/}
      {/*  </div>*/}
      {/*)}*/}
    </>
  );
};
