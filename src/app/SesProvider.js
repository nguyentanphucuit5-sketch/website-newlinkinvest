"use client";

import { SessionProvider } from "next-auth/react";

export default function SesProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
