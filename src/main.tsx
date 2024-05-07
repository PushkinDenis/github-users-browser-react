import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Test, NotFound } from "@atoms";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/github-users-browser-react/test" element={<Test />}></Route>
        <Route path="/github-users-browser-react/error" element={<NotFound />}></Route>
        <Route path="*" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
