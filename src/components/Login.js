import React, { useEffect, useRef, useState } from "react";
const CLIENT_ID =
  "163172311489-8r0v40o3vqm0cnvkjdgtt143vq90sp8n.apps.googleusercontent.com";
function Login({ setToken }) {
  const divRef = useRef();
  const [tokenClient, setTokenClient] = useState({});
  const handleCredentialResponse = async (response) => {
    // const client = await window.google.accounts.oauth2.initTokenClient({
    //   client_id: CLIENT_ID,
    //   scope:
    //     "https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata  https://www.googleapis.com/auth/drive",
    //   callback: (responsetoken) => {
    //     console.log("response", responsetoken);
    //   },
    // });
    // console.log("token_client", client);
    // console.log("callbackinside client", client.callback());
    // console.log(
    //   "client.requestAccessToken()",
    //   await client.requestAccessToken()
    // );
    // setToken(tokenClient.requestAccessToken());
  };
  const handler = () => {
    tokenClient.requestAccessToken();
  };

  useEffect(() => {
    //https://youtu.be/C0DUNy6RjNw?si=MKtvwI7yKNLSHYgC
    const init = () => {
      window.google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: handleCredentialResponse,
        ux_mode: "popup",
        prompt_parent_id: "login_button",
        use_fedcm_for_prompt: true,
        allowed_parent_origin: ["http://localhost:3000"],
        scope: [
          "https://www.googleapis.com/auth/drive.file",
          "https://www.googleapis.com/auth/drive.appdata",
          "https://www.googleapis.com/auth/drive",
        ],
      });
      window.google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
          console.log("notification", notification);
          console.log("// continue with another identity provider.");
        }
      });
      setTokenClient(
        window.google.accounts.oauth2.initTokenClient({
          client_id: CLIENT_ID,
          scope:
            "https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata  https://www.googleapis.com/auth/drive",

          callback: (responsetoken) => {
            setToken(responsetoken.access_token);
          },
        })
      );
    };
    window.google.accounts.id.renderButton(divRef.current, {});
    init();
  }, []);

  return (
    <>
      <div id="login_button" ref={divRef}>
        Login
      </div>
      <button onClick={handler}>click me</button>
    </>
  );
}

export default Login;
