import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import ChatInput from "./ChatInput";
import { db } from "../firebase";
import { query, orderBy, collection, doc } from "firebase/firestore";
import Message from "./Message";

function Chat() {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId); // get id of the current room
  const [roomDetails] = useDocument(roomId && doc(db, "rooms", roomId));
  console.log(roomDetails?.data());
  const messageRef = roomId && collection(db, "rooms", roomId, "messages");
  console.log(messageRef);
  const q = roomId && query(messageRef, orderBy("timestamp", "asc"));
  const [roomMessages, loading, error] = useCollection(roomId && q);
  console.log(roomMessages);

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]); //scrolls the messages to the bottom or most recent when a channel is selected

  return (
    <ChatContainer>
      <>
        <ChatHeader>
          <ChatHeaderLeft>
            <h3># {roomDetails?.data().name}</h3>
            <KeyboardArrowDownIcon />
          </ChatHeaderLeft>
          <ChatHeaderRight>
            <InfoOutlinedIcon />
          </ChatHeaderRight>
        </ChatHeader>
        <ChatMessages>
          {roomMessages?.docs.map((doc) => {
            const { message, timestamp, user, userImage } = doc.data();

            return (
              <Message
                key={doc.id}
                message={message}
                timestamp={timestamp}
                user={user}
                userImage={userImage}
              />
            );
          })}
          <ChatBottom ref={chatRef} />
        </ChatMessages>
        <ChatInput
          chatRef={chatRef}
          channelName={roomDetails?.data().name}
          channelId={roomId}
        ></ChatInput>
      </>
    </ChatContainer>
  );
}

export default Chat;

const ChatHeader = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid lightgray;
  justify-content: space-between;
  padding: 7px;
`;

const ChatHeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  > h3 {
    display: flex;
    text-transform: lowercase;
  }
  > .MuiSvgIcon-root {
    padding-top: 7px;
    font-size: large;
  }
  :hover {
    background-color: whitesmoke;
  }
`;

const ChatHeaderRight = styled.div`
  > .MuiSvgIcon-root {
    padding-top: 8px;
  }
`;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
`;

const ChatMessages = styled.div``;
const ChatBottom = styled.div`
  padding-bottom: 175px;
`;
