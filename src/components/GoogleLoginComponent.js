import React, { useEffect, useState } from "react";

// const CLIENT_ID =
//   "163172311489-9lct32qhak02eiv7otjj0ur8s7kj4uak.apps.googleusercontent.com";
const CLIENT_ID =
  "163172311489-8r0v40o3vqm0cnvkjdgtt143vq90sp8n.apps.googleusercontent.com";

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
