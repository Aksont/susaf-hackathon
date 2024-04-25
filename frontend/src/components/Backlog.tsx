"use client";
import React from "react";
import { FaBookmark } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { CredentialContext } from "./credentialContext";

const demo = {
  title: "Title of the item",
  tag: "Tag of the item",
  assignee: "Assignee of the item",
};

// @ts-ignore
const BacklogItem = ({ backlogItem }) => {
  return (
    <div className="p-4 flex flex-col overflow-hidden rounded border gap-4 hover:bg-gray-50 hover:cursor-pointer">
      <h3 className="font-semibold">{backlogItem.title}</h3>
      <div className="flex justify-between">
        <div className="flex gap-2 flex-row items-center">
          <FaBookmark
            className={`align-middle text-sm ${backlogItem.issueType === "Story" ? "text-green-500" : "text-purple-500"}`}
          />
          <p>{backlogItem.tag}</p>
        </div>

        <div className="flex gap-2 flex-row items-center">
          <p>{backlogItem.assignee}</p>
          {backlogItem.assigneeAvtURL ? (
            <span className="h-6 w-6">
              <img
                src={backlogItem.assigneeAvtURL}
                alt=""
                aria-hidden="true"
                className="rounded-full"
              />
            </span>
          ) : (
            <BsPersonCircle className="align-middle text-xl" />
          )}
        </div>
      </div>
    </div>
  );
};

export default function Backlog() {
  const [items, setItems] = React.useState([]);
  const context = React.useContext(CredentialContext);
  React.useEffect(() => {
    if (typeof window !== "undefined" && context) {
      let origin = window.location.origin;
      const url =
        context.credential.jiraURL !== ""
          ? context.credential.jiraURL
          : "susaf-hackathon.atlassian.net";
      const apiKey =
        context.credential.jiraAPIKey !== ""
          ? context.credential.jiraAPIKey
          : "aGlldWh1eW5odGhhaTE3NTJAZ21haWwuY29tOkFUQVRUM3hGZkdGMHhBcHFvb1doWjFVbngxNmw3NzhrVV82UGZ6bENHbzNnb2JiR0Y4RG5pX1g2NE9wZXFOQXFHMHhwcE1pSHNaRWE1d2RUdmJvSXJEWVV3RzRkN25qLTNQVHVZajRBcy1sMVYtb0dPaGV5MFBhZGRncGZOYnJrTjJLMXlyLWV4eGZVeFIteGlxdGdidE5YWkZTRHlKekdFYWVvWXhYUkJFcE1Fd05Tb3V0N3V5QT0wMDlGODMyMg==";
      if (origin.includes(":3000")) {
        origin = "http://0.0.0.0";
      }
      fetch(`${origin}:8000/getBacklog/${url}/${apiKey}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setItems(JSON.parse(data.data).issues);
        });
      const interval = setInterval(() => {
        fetch(`${origin}:8000/getBacklog/${url}/${apiKey}`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setItems(JSON.parse(data.data).issues);
          });
      }, 30000);

      return () => clearInterval(interval);
    }
  }, []);

  console.log(items);

  return (
    <div className="p-4 rounded border shadow-lg">
      <h2 className="text-2xl font-bold mb-4">BACKLOG</h2>
      <div className="overflow-auto max-h-[95%] ">
        <div className="flex flex-col gap-4">
          {items &&
            Array.isArray(items) &&
            items.map((item, index) => {
              const data = {
                // @ts-ignore
                title: item.fields.summary,
                // @ts-ignore
                tag: item.key,
                // @ts-ignore
                assignee: item.fields.assignee
                  ? // @ts-ignore
                    item.fields.assignee.displayName
                  : "Unassigned",
                // @ts-ignore
                assigneeAvtURL: item.fields.assignee
                  ? // @ts-ignore
                    item.fields.assignee.avatarUrls["24x24"]
                  : undefined,
                // @ts-ignore
                issueType: item.fields.issuetype.name,
              };
              return <BacklogItem backlogItem={data} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}
