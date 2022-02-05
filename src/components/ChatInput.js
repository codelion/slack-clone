import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp, doc } from "firebase/firestore";
import { auth } from "../firebase";

function ChatInput({ chatRef, channelName, channelId }) {
  console.log(channelId);
  const [input, setInput] = useState("");
  const user = auth.currentUser;
  const sendMessage = (e) => {
    e.preventDefault();
    const channelRef = doc(db, "rooms", channelId);

    if (!channelId) {
      return false;
    }

    addDoc(collection(channelRef, "messages"), {
      message: input,
      timestamp: serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
