import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google"; // Import GoogleOAuthProvider
import GoogleLoginComponent from "./components/GoogleLogin";

const App: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId="387527656694-mjjorv1ds2em5k0tdj02bavjqtbaab8q.apps.googleusercontent.com">
      {" "}
      <div>
        <h1>React Google Login Example</h1>
        <GoogleLoginComponent />
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
