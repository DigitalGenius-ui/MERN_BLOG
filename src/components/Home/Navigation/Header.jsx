import React, { useState } from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import Navigation from "./Navigation";
const Header = () => {
  const [navLink, setNavLink] = useState("/");

  const nav = [
    {
      title: "Blog",
      path: "/",
    },
    {
      title: "Create Post",
      path: "/addPost",
    },
    {
      title: "Gallery",
      path: "/gallery",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
  ];

  return (
    <Container>
      <Content>
        <User>
          <FaUserCircle style={{ fontSize: "1.6rem" }} />
          <h4>Milad Amiri</h4>
        </User>
        <Nav>
          {nav.map((item, i) => (
            <Navigation
              item={item}
              navLink={navLink}
              setNavLink={setNavLink}
              key={i}
            />
          ))}
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  box-shadow: 0px 0px 4px grey;
  background-color: #fff;
`;

const Content = styled.div`
  width: 80%;
  height: 55px;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.3rem;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  h4 {
    font-weight: 600;
    font-size: 0.9rem;
    color: rgba(0, 0, 0, 0.7);
  }
`;
