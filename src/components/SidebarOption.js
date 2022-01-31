import React from "react";
import styled from "styled-components";

function SidebarOption({ Icon, title }) {
  return (
    <SidebarOptionBody>
      <Icon />
      <Title>{title}</Title>
    </SidebarOptionBody>
  );
}

export default SidebarOption;

const SidebarOptionBody = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  color: gray;
  :hover {
    cursor: pointer;
    color: white;
  }
  > .MuiSvgIcon-root {
    font-size: 16px;
    padding: 3px;
  }
`;
const Title = styled.h3`
  margin-left: 5px;
  font-weight: 500;
  font-size: 16px;
`;
