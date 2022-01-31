import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderMiddle>
        <HeaderSearch>
          <SearchIcon />
          <input
            className="header__searchText"
            type="text"
            placeholder="Search"
          ></input>
        </HeaderSearch>
      </HeaderMiddle>

      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--slack-color);
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;

  justify-content: space-between;
  color: white;

  > .MuiSvgIcon-root {
    margin-right: 20px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  margin-left: 20px;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderMiddle = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0.4;
`;
const HeaderSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid gray;
  flex: 1;
  border-radius: 6px;
  color: gray;
  padding: 0 50px;
  text-align: center;
  vertical-align: middle;

  > input {
    border: none;
    background: none;
    width: 100%;
    min-width: 30vw;
    color: gray;
    outline-width: 0;
    font-size: medium;
    text-align: center;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  flex: 0.3;
  color: white;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
