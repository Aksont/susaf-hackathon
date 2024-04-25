"use client";
import * as React from "react";

export interface CredentialType {
  email: string;
  jiraAPIKey: string;
  jiraURL: string;
  miroBoardID: string;
  rememberMe: boolean;
}
export interface CredentialContextType {
  credential: CredentialType;
  setCredential: React.Dispatch<React.SetStateAction<CredentialType>>;
}

export const CredentialContext = React.createContext<CredentialContextType | null>(null);
