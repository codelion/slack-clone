import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";

/**
 * Message function component. This component returns a message display container with user and message info.
 *
 * @param {Object} props - The props that are passed to the component.
 * @param {string} props.message - The message that the user has sent.
 * @param {Object} props.timestamp - The timestamp for when the message was sent.
 * @param {string} props.user - The user who has sent the message.
 * @param {string} props.userImage - The image of the user who has sent the message.
 * @return {JSX.Element} A React component that includes the message from the user, the timestamp, user's name, and user's image.
 */
function Message({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <UserAvatar src={userImage} variant="rounded" />
      <MessageInfo>
        <h4>
          {user}{" "}
          <span>
            {new Date(timestamp?.toDate()).toLocaleString("en-US", {
              timeZone: "Asia/Kolkata",
            })}
          </span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 5px;
  padding-top: 5px;
  padding-right: 5px;
  align-items: center;
`;

const UserAvatar = styled(Avatar)`
  border-bottom-left-radius: 5px;
  padding-left: 20px;
`;

const MessageInfo = styled.div`
  padding-left: 10px;
  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;
