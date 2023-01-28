import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthProvider from "./component/context/AuthProvider/AuthProvider";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import ProductProvider from "./component/context/ProductProvider/ProductProvider";
// import { ThemeProvider } from "@mui/material";
// import { theme } from "./theme";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ProductProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ProductProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
