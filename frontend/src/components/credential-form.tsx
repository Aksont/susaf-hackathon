"use client";
import React from "react";
import axios from "axios";
import { CredentialContext } from "./credentialContext";

export default function CredentialsForm(props: {
  handleSubmitProps: () => void;
}) {
  const context = React.useContext(CredentialContext);

  const [formData, setFormData] = React.useState({
    email: "",
    jiraAPIKey: "",
    jiraURL: "",
    miroBoardID: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log(
      "Basic " + `${btoa(`${formData.email}:${formData.jiraAPIKey}`)}`,
    );

    context?.setCredential({
      ...context?.credential,
      ...formData,
      jiraURL: formData.jiraURL.match("(?<=:\\/\\/)")?.[0] ?? "",
      jiraAPIKey: btoa(`${formData.email}:${formData.jiraAPIKey}`),
    });
    props.handleSubmitProps();
  };

  return (
    <div className="p-8 m-auto rounded-2xl border-2 border-green-500 shadow-2xl shadow-green-200 w-1/4">
      <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email<span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="jiraURL"
            className="block text-sm font-medium text-gray-700"
          >
            Jira Board URL<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="jiraURL"
            id="jiraURL"
            value={formData.jiraURL}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="jiraAPIKey"
            className="block text-sm font-medium text-gray-700"
          >
            API Token for Jira<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="jiraAPIKey"
            id="jiraAPIKey"
            value={formData.jiraAPIKey}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="miroBoardID"
            className="block text-sm font-medium text-gray-700"
          >
            Miro Board URL<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="miroBoardID"
            id="miroBoardID"
            value={formData.miroBoardID}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-green-700 text-white rounded hover:bg-blue-700 self-center"
        >
          Go
        </button>
      </form>
    </div>
  );
}
