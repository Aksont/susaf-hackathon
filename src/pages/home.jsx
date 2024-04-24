import * as React from "react";
import CredentialsForm from "../components/CredentialsForm";
import MainView from "../components/MainView";
import { CredentialContext } from "../app";

const areCredentialsValid = (credentials) => {
  for (const property in credentials) {
    if (credentials[property] === "") {
      return false; // If any property is "", return false
    }
  }
  return true; // If all properties are not "", return true
};

export default function Home() {
  const { credentials, setCredentials } = React.useContext(CredentialContext);
  const [displayCredentialsForm, setDisplayCredentialsForm] = React.useState(true);

  return (
    <div className="flex p-8 gap-4 h-screen">
      {!displayCredentialsForm ?
        <CredentialsForm handleSubmitProp={() => {
          setDisplayCredentialsForm(!displayCredentialsForm);
        }} /> :
        <MainView
          miroBoardID={"uXjVKQ6BNtk="}
        />

      }
    </div>
  );
}
