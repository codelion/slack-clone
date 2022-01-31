import React from "react";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CreateIcon from "@mui/icons-material/Create";
import InsertCommentRoundedIcon from "@mui/icons-material/InsertCommentRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import AllInclusiveRoundedIcon from "@mui/icons-material/AllInclusiveRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import SidebarOption from "./SidebarOption";

function Sidebar() {
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
        <SidebarOption Icon={ArrowDropDownRoundedIcon} title="Channels" />
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
`;
const SidebarHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  padding: 10px 0;
  border-top: 0.1px solid gray;
  border-bottom: 0.1px solid gray;

  > .MuiSvgIcon-root {
    padding: 6px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }

  > h2 {
    font-size: 20px;
    > .MuiSvgIcon-root {
      font-size: medium;
      font-weight: bold;
      vertical-align: middle;
    }
  }
`;
const SidebarInfo = styled.div`
  margin: 0;
  padding: auto 25px;
`;
