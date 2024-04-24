import React from "react";
import { CredentialContext } from "../app";

export default function CredentialsForm() {
  const { credentials, setCredentials } = React.useContext(CredentialContext);

  const [formData, setFormData] = React.useState({
    email: "",
    jiraAPIKey: "",
    jiraURL: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setCredentials({
      ...credentials,
      ...formData,
      jiraAPIKey: btoa(`${formData.email}:${formData.jiraAPIKey}`),
    });
    // Add your form submission logic here
    //WIP: fetch tickets
    fetch(`${formData.jiraURL}/rest/api/2/search?jql=project=susaf-hackathon&maxResults=1000
`);
  };

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="jiraURL" className="block text-sm font-medium text-gray-700">
            Jira Board URL
          </label>
          <input
            type="text"
            name="jiraURL"
            id="jiraURL"
            value={formData.jiraURL}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="jiraAPIKey" className="block text-sm font-medium text-gray-700">
            API Token
          </label>
          <input
            type="text"
            name="jiraAPIKey"
            id="jiraAPIKey"
            value={formData.jiraAPIKey}
            onChange={handleChange}
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
