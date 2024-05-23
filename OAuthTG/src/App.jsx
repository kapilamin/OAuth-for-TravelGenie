import React from "react";

import { Client, Account, OAuthProvider } from "appwrite";

function App() {
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('664b025500172e0cc60b');                 // Your project ID

const account = new Account(client);

// Go to OAuth provider login page
account.createOAuth2Session(
    OAuthProvider.Google, // provider
    "http://localhost:3000/success", // redirect here on success
    "http://localhost:3000/failure", // redirect here on failure
    // ['repo', 'user'] // scopes (optional)
);



  return (
    <>
    <button>
      Sign up
    </button>
    </>
  )
}

export default App
