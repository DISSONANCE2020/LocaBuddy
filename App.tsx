import React from "react";
import { WalletProvider } from "./src/lib/wallet";
import LoginSignup from "./src/screens/LoginSignup/LoginSignup";

export default function App() {
  return (
    <WalletProvider>
      <LoginSignup />
    </WalletProvider>
  );
}
