import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import SignClient from "@walletconnect/sign-client";
import type { SessionTypes } from "@walletconnect/types";
import { Linking } from "react-native";

interface WalletContextType {
  client: InstanceType<typeof SignClient> | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => Promise<void>;
  account: string | null;
  session: SessionTypes.Struct | null;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [client, setClient] = useState<InstanceType<typeof SignClient> | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [session, setSession] = useState<SessionTypes.Struct | null>(null);

  useEffect(() => {
    const init = async () => {
      const signClient = await SignClient.init({
        projectId: "YOUR_PROJECT_ID",
        metadata: {
          name: "LocaBuddy",
          description: "My Expo app",
          url: "https://example.com",
          icons: [],
        },
      });
      setClient(signClient);
    };
    init();
  }, []);

  const connectWallet = async () => {
    if (!client) return;

    const { uri, approval } = await client.connect({
      requiredNamespaces: {
        eip155: {
          methods: ["eth_sendTransaction", "personal_sign", "eth_signTypedData"],
          chains: ["eip155:1"],
          events: ["chainChanged", "accountsChanged"],
        },
      },
    });

    if (uri) Linking.openURL(uri);

    const sessionData = await approval();
    setSession(sessionData);

    const walletAccount = sessionData.namespaces.eip155.accounts?.[0]?.split(":")[2] ?? null;
    setAccount(walletAccount);
  };

  const disconnectWallet = async () => {
    if (session && client) {
      await client.disconnect({ topic: session.topic, reason: { code: 6000, message: "User disconnected" } });
    }
    setSession(null);
    setAccount(null);
  };

  return (
    <WalletContext.Provider value={{ client, connectWallet, disconnectWallet, account, session }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) throw new Error("useWallet must be used within WalletProvider");
  return context;
};
