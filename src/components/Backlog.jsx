import React from "react";
import { CredentialContext } from "../app";
import { FaBookmark } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";


const demo = {
  title: "Title of the item",
  tag: "Tag of the item",
  assignee: "Assignee of the item"
}

const BacklogItem = ({ backlogItem }) => {
  return (
    <div className="p-4 flex flex-col overflow-hidden rounded border">
      <h3 className="font-semibold">
        {backlogItem.title}
      </h3>
      <div className="flex gap-2 flex-row items-center">
        <FaBookmark className="align-middle text-sm" />
        <p>
          {backlogItem.tag}
        </p>
      </div>

      <div className="flex gap-2 flex-row items-center">
        <BsPersonCircle className="align-middle text-xl" />
        <p>
          {backlogItem.assignee}
        </p>
      </div>
    </div>
  )
}

export default function Backlog() {
  const { credentials } = React.useContext(CredentialContext);

  return (
    <div className="p-4 rounded border shadow-lg">
      <h2 className="text-2xl font-bold mb-4">
        BACKLOG
      </h2>
      <BacklogItem backlogItem={demo} />
    </div>
  );
}
