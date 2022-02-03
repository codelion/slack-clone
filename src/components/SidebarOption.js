import React from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { enterRoom } from "../features/appSlice";

function SidebarOption({ Icon, title, addChannelOption, id }) {
  const addChannel = () => {
    const channelName = prompt("Please enter a channel name.");

    if (channelName) {
      addDoc(collection(db, "rooms"), {
        name: channelName,
        timestamp: serverTimestamp(),
      });
    }
  };
  const dispatch = useDispatch();
  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon />}
      {Icon ? (
        <Title>{title}</Title>
      ) : (
        <SidebarOptionChannel style={{ paddingLeft: "45px" }}>
          <span>#</span>
          <Title>{title}</Title>
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  color: gray;
  cursor: pointer;
  :active {
    background-color: rgb(17, 100, 163);
    color: white;
  }
  :hover {
    background-color: rgba(209, 210, 211, 0.2);
  }
  > .MuiSvgIcon-root {
    font-size: 16px;
    padding: 3px;
    margin-left: 5px;
  }
`;
const Title = styled.div`
  margin-left: 5px;
  font-weight: 450;
  font-size: 15px;
`;

const SidebarOptionChannel = styled.h3`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 22px;
  > span {
    padding: 5px;
  }
`;
