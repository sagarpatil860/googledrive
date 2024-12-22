import React, { useEffect, useState } from "react";
// import GoogleLoginComponent from "./components/GoogleLoginComponent";
import FileUploadComponent from "./components/FileUploadComponent";
import Login from "./components/Login";
import axios from "axios";

const App = () => {
  const [token, setToken] = useState(null);
  const handleCredentialResponse = (r) => {
    console.log("r", r);
  };
  // data-client_id="163172311489-9lct32qhak02eiv7otjj0ur8s7kj4uak.apps.googleusercontent.com"
  const getFiles = async () => {
    try {
      const res = await axios.get(
        "https://www.googleapis.com/drive/v3/files?key=AIzaSyC1AXo6jsZPdlmg4x-oGwHfvN950ymwI6s",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      return res;
    } catch (e) {
      return "failed";
    }
  };
  useEffect(() => {
    console.log(getFiles().then((r) => r));
  }, [token]);
  return (
    <div>
      {/* <div
        id="g_id_onload"
        data-client_id="163172311489-8r0v40o3vqm0cnvkjdgtt143vq90sp8n.apps.googleusercontent.com"
        data-callback="handleCredentialResponse"
      ></div>
      <div className="g_id_signin" data-type="standard"></div> */}
      <h1>sagar</h1>
      {!token && <Login setToken={setToken} />}
      {/* <GoogleLoginComponent setToken={setToken} /> */}
      {token && <FileUploadComponent token={token} />}
      <button onClick={getFiles}>getFiles</button>
    </div>
  );
};

export default App;

