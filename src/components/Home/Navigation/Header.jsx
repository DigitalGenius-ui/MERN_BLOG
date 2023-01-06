import React, { useState } from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import Navigation from "./Navigation";
import { BlogContext } from "../../../Context/Context";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [navLink, setNavLink] = useState("/");
  const { isAuth } = BlogContext();

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

  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <User onClick={() => navigate("/auth")}>
          <FaUserCircle style={{ fontSize: "1.6rem" }} />
          <h4>{isAuth ? isAuth.username : "Sign In"}</h4>
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
  cursor: pointer;

  h4 {
    font-weight: 600;
    font-size: 0.9rem;
    color: rgba(0, 0, 0, 0.7);
    text-transform: capitalize;
  }
`;
