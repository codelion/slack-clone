import React from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { enterRoom } from "../features/appSlice";

/**
 * SidebarOption is a functional component that renders option containers in the sidebar according to the provided props.
 * It handles adding channels and selecting channels actions based on user interactions.
 * @function
 *
 * @param   {Object}    { Icon, title, addChannelOption, id }
 * @param   {Component} Icon              - React component for the Icon of the sidebar option.
 * @param   {string}    title             - name of the sidebar option.
 * @param   {boolean}   addChannelOption  - flag indicating whether the sidebar option is for adding a new channel.
 * @param   {string}    id                - id of the room/channel.
 *
 * @return  {JSX.Element}            SidebarOption JSX component.
 */
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
        <SidebarOptionChannel style={{ paddingLeft: "25px" }}>
          <span>#</span>
          <Title>{title}</Title>
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

// Styled components

/**
 * SidebarOptionContainer styles the outermost div containing each SidebarOption.
 */
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
    background-color: var(--slack-color-dark);
  }
  > .MuiSvgIcon-root {
    font-size: 16px;
    padding: 3px;
    margin-left: 5px;
  }
`;

/**
 * Title styles the Title element in each SidebarOption.
 */
const Title = styled.div`
  margin-left: 5px;
  font-weight: 450;
  font-size: 15px;
`;

/**
 * SidebarOptionChannel styles the channel name portion of the SidebarOption.
 */
const SidebarOptionChannel = styled.h3`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 22px;
  > span {
    padding: 5px;
  }
`;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 22px;
  > span {
    padding: 5px;
  }
`;
