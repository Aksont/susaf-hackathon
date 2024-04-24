import React from "react";
import { CredentialContext } from "../app";
import Backlog from "./Backlog";

export default function MainView() {
  const { credentials } = React.useContext(CredentialContext);

  const returnMiroFullurl = (miroBoardID) => {
    return `https://miro.com/app/live-embed/${miroBoardID}/?autoplay=true&embedMode=view_only_without_ui`
  }

  return (
    <>
      <Backlog />
      <iframe
        class="w-full aspect-square rounded"
        src={returnMiroFullurl(credentials.miroBoardID)}
        scrolling="no"
        allowFullScreen />
    </>
  );
}
