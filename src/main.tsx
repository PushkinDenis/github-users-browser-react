import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./components/atoms/button/button.tsx";

// import { App } from "./App";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Button type={"submit"} textContent={"Кнопка"} />
    <Button type={"submit"} className={"button1"} textContent={"Кнопка"} />
  </React.StrictMode>,
);
