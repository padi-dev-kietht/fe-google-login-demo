import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleLoginComponent: React.FC = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const handleLoginSuccess = (response: any) => {
    const token = response.credential;
    console.log(token);

    setAccessToken(token);

    sendRequest(token);
  };

  const handleLoginFailure = (error: any) => {
    console.error("Google login failed:", error);
  };

  const sendRequest = async (token: string) => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error sending request:", error.response);
    }
  };

  return (
    <div>
      <h2>Google Login</h2>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      />
      {accessToken && <p>Logged in! Token: {accessToken}</p>}
    </div>
  );
};

export default GoogleLoginComponent;
