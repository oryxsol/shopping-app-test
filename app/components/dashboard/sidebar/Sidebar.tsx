"use client";
import React from "react";
import SidebarItem from "./SidebarItems";
import styled from "@emotion/styled";



const Sidebar = () => {
  return (
    <SidebarContainer>
      <Header>
        <Logo>Logo</Logo>
        <IconContainer className="bg-secondary">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.56165 1.5H12.2283"
              stroke="#6290CB"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.56165 6.5H12.2283"
              stroke="#6290CB"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.56165 11.5H12.2283"
              stroke="#6290CB"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconContainer>
      </Header>
      <ScrollContainer>
        <SidebarItem />
      </ScrollContainer>
    </SidebarContainer>
  );
};

export default Sidebar;


// Styled Components
const SidebarContainer = styled.div`
  background-color: #f8fafc; 
  color: black;
  height: 100vh;
  width: 16.66%; 
  display: none;

  @media (min-width: 1024px) {
    display: block; 
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

const Logo = styled.p`
  font-size: 24px; 
  font-weight: bold;
  text-transform: uppercase;
`;

const IconContainer = styled.div`
  background-color: rgb(218 231 249 / var(--tw-bg-opacity)); 
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px; 
  height: 32px;
`;

const ScrollContainer = styled.div`
  padding: 20px 16px; 
  overflow-y: scroll;
  scrollbar-width: none; 
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none; 
  }
`;