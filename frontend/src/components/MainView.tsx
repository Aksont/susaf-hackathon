"use client";

import React from "react";
import { CredentialContext } from "./credentialContext";
import Backlog from "./Backlog";
import { TbReload } from "react-icons/tb";

export default function MainView(props: { miroBoardID: string }) {
  const [refreshId, setRefreshId] = React.useState(1);

  const returnMiroFullurl = (miroBoardID?: string) => {
    return `https://miro.com/app/live-embed/${miroBoardID}/?autoplay=true&embedMode=view_only_without_ui`;
  };

  return (
    <>
      <Backlog />
      <div className="flex flex-col gap-4 w-full">
        <button
          className="flex self-end p-4 shadow-md rounded-xl w-fit gap-2 hover:bg-gray-50 hover:cursor-pointer"
          onClick={() => setRefreshId((refreshId) => refreshId + 1)}
        >
          <TbReload className="flex self-center" />
          Refresh
        </button>
        <iframe
          className="w-full aspect-square rounded"
          src={returnMiroFullurl(props.miroBoardID)}
          scrolling="no"
          allowFullScreen
          key={refreshId}
        />
      </div>
    </>
  );
}
