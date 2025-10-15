import React from "react";
import "react-native-get-random-values";
import "react-native-url-polyfill/auto";
import { WalletProvider } from "./src/lib/wallet";
import { SessionProvider, useSession } from "./src/lib/session";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import LoginSignup from "./src/screens/LoginSignup/LoginSignup";

function Root() {
  const { isLoggedIn } = useSession();
  return isLoggedIn ? <HomeScreen /> : <LoginSignup />;
}

export default function App() {
  return (
    <WalletProvider>
      <SessionProvider>
        <Root />
      </SessionProvider>
    </WalletProvider>
  );
}
