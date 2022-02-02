import React from "react";
import styled from "styled-components";

function SidebarOption({ Icon, title }) {
  return (
    <SidebarOptionContainer>
      {Icon && <Icon />}
      {Icon ? (
        <Title>{title}</Title>
      ) : (
        <SidebarOptionChannel>
          <span>#</span>
          {title}
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
const Title = styled.h3`
  margin-left: 5px;
  font-weight: 450;
  font-size: 15px;
`;

const SidebarOptionChannel = styled.h3`
  > span {
    padding: 15px;
  }
`;
