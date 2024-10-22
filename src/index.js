import React from "react";
import { createRoot } from "react-dom/client";
import "./deails.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Paths from "./Paths";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Paths />
  </BrowserRouter>
);
