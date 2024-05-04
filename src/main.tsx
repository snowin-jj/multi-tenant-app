import { StytchB2BProvider } from "@stytch/react/b2b";
import { StytchB2BUIClient } from "@stytch/vanilla-js/b2b";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";

const stytch = new StytchB2BUIClient(import.meta.env.VITE_STYTCH_PUBLIC_TOKEN);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StytchB2BProvider stytch={stytch}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StytchB2BProvider>
  </React.StrictMode>
);
