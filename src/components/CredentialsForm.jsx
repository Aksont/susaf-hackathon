import React from "react";
import { CredentialContext } from "../app";

export default function CredentialsForm(props) {
  const { handleSubmitProp } = props;

  const { credentials, setCredentials } = React.useContext(CredentialContext);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", credentials);
    setCredentials({
      ...credentials,
      ...credentials,
      jiraAPIKey: btoa(`${credentials.email}:${credentials.jiraAPIKey}`),
    });
    // Add your form submission logic here
    //WIP: fetch tickets
    // fetch(`${credentials.jiraURL}/rest/api/2/search?jql=project=susaf-hackathon&maxResults=1000`);

    handleSubmitProp();
  };

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email<span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={credentials.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="jiraURL" className="block text-sm font-medium text-gray-700">
            Jira Board URL<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="jiraURL"
            id="jiraURL"
            value={credentials.jiraURL}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="jiraAPIKey" className="block text-sm font-medium text-gray-700">
            API Token for Jira<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="jiraAPIKey"
            id="jiraAPIKey"
            value={credentials.jiraAPIKey}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="miroBoardID" className="block text-sm font-medium text-gray-700">
            Miro Board URL<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="miroBoardID"
            id="miroBoardID"
            value={credentials.miroBoardID}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
