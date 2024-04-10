import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./components/atoms/button/button.tsx";
import { Input } from "./components/atoms/input/input.tsx";

// import { App } from "./App";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Button type={"submit"} textContent={"Кнопка"} />
    <Button type={"submit"} className={"button1"} textContent={"Кнопка"} />
    <Input type={"text"} placeholder={"Find user"} />
    <Input type={"checkbox"} />
  </React.StrictMode>,
);
