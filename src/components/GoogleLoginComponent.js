import React, { useEffect, useState } from "react";

// const CLIENT_ID =
//   "=============<CLIENT_id>============";
const CLIENT_ID = "=============<CLIENT_id>============";

const GoogleLoginComponent = ({ setToken }) => {
  //   useEffect(() => {
  //     const initializeGoogleSignIn = async () => {
  //       try {
  //         //   await window.gapi.load("auth2", () => {
  //         //     const auth2 = window.gapi.auth2
  //         //       .init({
  //         //         client_id: CLIENT_ID,
  //         //         //   scope: "https://www.googleapis.com/auth/drive.file",
  //         //       })
  //         //       .then((r) => console.log(JSON.stringify(r)));

  //         //     auth2.attachClickHandler(
  //         //       document.getElementById("google-signin-btn"),
  //         //       {},
  //         //       (googleUser) => {
  //         //         const access_token = googleUser.getAuthResponse().access_token;
  //         //         setToken(access_token);
  //         //       },
  //         //       (error) => {
  //         //         console.error(
  //         //           "Error during sign-in:",
  //         //           JSON.stringify(error, undefined, 2)
  //         //         );
  //         //       }
  //         //     );
  //         //   });
  //         await window.gapi.load("auth2", async function () {
  //           const GoogleAuthObj = await window.gapi.auth2.init({
  //             client_id: CLIENT_ID,
  //           });
  //           const googleAuthInstance = await window.gapi.auth2.getAuthInstance(
  //             GoogleAuthObj
  //           );
  //           const signInData = await googleAuthInstance.signIn({
  //             scope: "https://www.googleapis.com/auth/drive.file",
  //             prompt: "none",
  //           });
  //           console.log("signInData", signInData);
  //         });
  //         const GoogleAuthObj = await window.gapi.auth2.init({
  //           client_id: CLIENT_ID,
  //         });
  //         const googleAuthInstance = await window.gapi.auth2.getAuthInstance(
  //           GoogleAuthObj
  //         );
  //         const signInData = await googleAuthInstance.signIn({
  //           scope: "https://www.googleapis.com/auth/drive.file",
  //         });
  //         console.log("signInData", signInData);
  //       } catch (e) {
  //         console.error("Initialization error:", e);
  //       }
  //     };

  //     initializeGoogleSignIn();
  //   }, []);

  return <button id="google-signin-btn">Sign in with Google</button>;
};

export default GoogleLoginComponent;
