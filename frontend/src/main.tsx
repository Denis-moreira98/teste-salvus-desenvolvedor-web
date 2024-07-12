import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { router } from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import ProductProvider from "./contexts/ProductContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <ProductProvider>
         <RouterProvider router={router} />
      </ProductProvider>
   </React.StrictMode>
);
