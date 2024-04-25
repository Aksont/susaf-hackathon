"use client";

import React from "react";
import { CredentialContext } from "./credentialContext";
import Backlog from "./Backlog";

export default function MainView(props: { miroBoardID: string }) {
  const context = React.useContext(CredentialContext);

  const returnMiroFullurl = (miroBoardID?: string) => {
    return `https://miro.com/app/live-embed/${miroBoardID}/?autoplay=true&embedMode=view_only_without_ui`;
  };

  return (
    <>
      <Backlog />
      <iframe
        className="w-full aspect-square rounded"
        src={returnMiroFullurl(props.miroBoardID)}
        scrolling="no"
        allowFullScreen
      />
    </>
  );
}
