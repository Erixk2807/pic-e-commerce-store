import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ProductContextProvider } from "./ProductContext";
import App from "./App";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <ProductContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductContextProvider>
);
