import React from "react";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CreateIcon from "@mui/icons-material/Create";
import InsertCommentRoundedIcon from "@mui/icons-material/InsertCommentRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import AllInclusiveRoundedIcon from "@mui/icons-material/AllInclusiveRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SidebarOption from "./SidebarOption";
// import { doc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { collection } from "firebase/firestore";

function Sidebar() {
  const [channels, loading, error] = useCollection(collection(db, "rooms"));
  console.log(channels);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <h2>
          Sample Slack
          <KeyboardArrowDownIcon />
        </h2>

        <CreateIcon />
      </SidebarHeader>
      <SidebarInfo>
        <SidebarOption Icon={InsertCommentRoundedIcon} title="Threads" />
        <SidebarOption
          Icon={AlternateEmailRoundedIcon}
          title="Mentions & reactions"
        />
        <SidebarOption Icon={AllInclusiveRoundedIcon} title="Slack Connect" />
        <SidebarOption Icon={MoreVertRoundedIcon} title="More" />
        <br />
        <SidebarOption Icon={ArrowDropDownRoundedIcon} title="Channels" />
        <SidebarOption Icon={AddBoxIcon} title="Add Channel" addChannelOption />

        {channels?.docs.map((doc) => (
          <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
        ))}
      </SidebarInfo>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  max-width: 260px;
  overflow: hidden;
`;
const SidebarHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  padding: 10px;
  padding-left: 15px;
  padding-right: 20px;
  border-top: 0.1px solid gray;
  border-bottom: 0.1px solid gray;
  :hover {
    background-color: rgba(209, 210, 211, 0.2);
  }

  > .MuiSvgIcon-root {
    padding: 6px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
    cursor: pointer;
  }

  > h2 {
    font-size: 20px;
    > .MuiSvgIcon-root {
      font-size: large;
      font-weight: bold;
      vertical-align: middle;
      cursor: pointer;
    }
  }
`;
const SidebarInfo = styled.div`
  padding-top: 10px;
`;
