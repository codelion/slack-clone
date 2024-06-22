import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  /**
   * Function to sign in a user. This is done by preventing the default event behaviour and then 
   * use the `signInWithPopup` function from Firebase Authentication. 
   * If there is an error during this process, an alert is shown with the error message.
   * @param {object} e - event object from the eventListener.
   */
   const signIn = (e) => {
      // Prevent the default behavior of the event
      e.preventDefault();
  
      // Try to sign in with popup. Catch and alert any errors that occur
      signInWithPopup(auth, provider).catch((error) => {
        alert(error.message);
      });
    };
     * @method signInWithPopup
     * @param {Object} auth - The authentication service object from Firebase
     * @param {Object} provider - The OAuth provider object
     * @throws {Error} When there is an issue with user sign in
     */
    signInWithPopup(auth, provider).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://helios-i.mashable.com/imagery/articles/047UsVLCrupUmmsuitpn1nw/hero-image.fill.size_1248x702.v1623374965.png"
          alt=""
        />
        <h1>Sign in to Sample Slack</h1>
        <p>manish-slack-clone.web.app</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > Button {
    margin: 30px;
    color: white;
    background-color: green;
    text-transform: inherit;
    :hover {
      color: white;
      background-color: green;
    }
  }
`;
