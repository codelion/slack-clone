import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";

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
