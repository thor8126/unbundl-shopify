import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./Pages/App";
import { BrowserRouter as Router } from "react-router-dom";


const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Auth0Provider
      domain="dev-abnu2rhhox42otrn.us.auth0.com"
      clientId="HrJwFNne7Byko566VrDHD23UjPf4N7p7"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </Router>
);
