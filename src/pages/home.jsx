import * as React from "react";
import CredentialsForm from "../components/credentials-form";

export default function Home() {
  return (
    <div className="flex">
      {/*  Jira credentials form*/}
      <CredentialsForm />
      {/*  Jira + Miro view*/}
    </div>
  );
}
