"use client";
import * as React from "react";
import CredentialsForm from "@/components/credential-form";
import MainView from "@/components/MainView";
import {
  CredentialContext,
  CredentialType,
} from "@/components/credentialContext";

const areCredentialsValid = (credentials: { [x: string]: string }) => {
  for (const property in credentials) {
    if (credentials[property] === "") {
      return false; // If any property is "", return false
    }
  }
  return true; // If all properties are not "", return true
};

export default function Home() {
  const [displayCredentialsForm, setDisplayCredentialsForm] =
    React.useState(true);

  const [credential, setCredential] = React.useState<CredentialType>({
    email: "",
    jiraAPIKey: "",
    jiraURL: "",
    miroBoardID: "",
    rememberMe: true,
  });
  return (
    <CredentialContext.Provider value={{ credential, setCredential }}>
      <div className="flex p-8 gap-4 h-screen">
        {!displayCredentialsForm ? (
          <CredentialsForm
            handleSubmitProps={() => {
              setDisplayCredentialsForm(!displayCredentialsForm);
            }}
          />
        ) : (
          <MainView miroBoardID={"uXjVKQ6BNtk="} />
        )}
      </div>
    </CredentialContext.Provider>
  );
}
