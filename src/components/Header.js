import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { logout } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Header() {
  const user = auth.currentUser;
  const dispatch = useDispatch();

  const signout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderMiddle>
        <HeaderSearch>
          <input
            className="header__searchText"
            type="text"
            placeholder="Search"
          ></input>
          <SearchIcon />
        </HeaderSearch>
      </HeaderMiddle>

      <HeaderRight>
        <HelpOutlineIcon />

        <ButtonContainer onClick={signout}>
          <p>Logout</p>
          <HeaderAvatar variant="rounded" src={user?.photoURL} />
        </ButtonContainer>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--slack-color-dark);
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  position: fixed;
  width: 100vw;
`;
const HeaderLeft = styled.div`
  flex: 0.2;
  display: flex;
  align-items: center;

  justify-content: space-between;
  color: white;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    font-size: 22px;
    margin-left: auto;
    margin-right: 22px;
    cursor: pointer;
  }
`;

const HeaderMiddle = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0.6;
  width: 100%;
`;
const HeaderSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid gray;
  flex: 1;
  border-radius: 6px;
  background-color: rgba(209, 210, 211, 0.2);
  color: white;
  padding: 0 5px;
  text-align: center;
  vertical-align: middle;
  justify-content: space-between;
  height: 25px;
  :hover {
    background-color: rgba(209, 210, 211, 0.23);
  }
  > input {
    border: none;
    background: none;
    width: 100%;
    min-width: 30vw;
    color: white;
    outline-width: 0;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
  }
  > .MuiSvgIcon-root {
    font-size: 20px;
    padding: 3px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  flex: 0.2;
  color: white;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    font-size: 22px;
    cursor: pointer;
    padding: 3px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  > p {
    color: white;
    padding: 4px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  margin-left: 20px;
  height: 30px !important;
  width: 30px !important;
  margin-right: 10px;
  border-radius: 5px;
  :hover {
    opacity: 0.8;
  }
`;
