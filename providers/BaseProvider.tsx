"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";

const queryClient = new QueryClient();

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId="1008505461325-32m7akgav88lr60g27u9idcj99saj22k.apps.googleusercontent.com">
          {children}
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </Provider>
  );
}
