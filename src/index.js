import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-u5mawjni6mjjw103.us.auth0.com"
    clientId="yyPUBcQM8SR1PQ0x2CDveImLx4EVrZuH"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://dev-u5mawjni6mjjw103.us.auth0.com/api/v2/",
      scope: "read:current_user openid: profile email nickname"
    }}
  >

    <App />
  </Auth0Provider>
);

