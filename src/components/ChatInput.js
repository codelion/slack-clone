import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp, doc } from "firebase/firestore";
import { auth } from "../firebase";

/**
 * A react component that sets up and manages the chat input functionality in a chat application.
 *
 * @param {Object} props - Contains properties passed down to the chat input.
 * @param {Object} props.chatRef - Contains a reference to the chat component.
 * @param {String} props.channelName - The name of the current chat channel.
 * @param {String} props.channelId - The unique id of the current chat channel.
 *
 * @returns {Object} Returns a JSX component that includes the chat input field and a 'Send' button.
 */
function ChatInput({ chatRef, channelName, channelId }) {
  console.log(channelId);
  const [input, setInput] = useState("");
  const user = auth.currentUser;

  /**
   * Function to send a message. It grabs the input from the chat input field and adds it to the 'messages' collection in Firestore.
   * If there is no channelId, the function just returns false.
   * After a message is sent, the function scrolls the chat to the latest message
   * and clears the input.
   *
   * @param {event} e - an event object generated when the 'Send' button is clicked.
   */
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
