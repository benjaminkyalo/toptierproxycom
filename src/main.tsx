import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";

const router = getRouter();

// Static metadata remains available to non-JS readers; route heads own it once React starts.
document.head.querySelectorAll('link[rel="canonical"], meta[name="description"], meta[name="keywords"], meta[name="robots"], meta[name^="twitter:"], meta[property^="og:"], meta[property^="article:"]').forEach(node => node.remove());
const root = document.getElementById("root");
if (!root) throw new Error("Application root is missing");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
