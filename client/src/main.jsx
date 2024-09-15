import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { PrivyProvider } from "@privy-io/react-auth";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <PrivyProvider
      appId="cm10lmh7603cl93b9x6nfzriv"
      config={{
        // Display email and wallet as login methods
        loginMethods: ["email", "google", "github"],
        // Customize Privy's appearance in your app
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      <App />
    </PrivyProvider>
  </React.StrictMode>
);
