import React from "react";
import "react-native-get-random-values";
import "react-native-url-polyfill/auto";
import { WalletProvider } from "./src/lib/wallet";
import LoginSignup from "./src/screens/LoginSignup/LoginSignup";

export default function App() {
  return (
    <WalletProvider>
      <LoginSignup />
    </WalletProvider>
  );
}
