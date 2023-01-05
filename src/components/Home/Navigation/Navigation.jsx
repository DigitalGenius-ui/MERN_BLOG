import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Navigation = ({ item, navLink, setNavLink }) => {
  const navigate = useNavigate();
  const changeNav = () => {
    setNavLink(item.path);
    navigate(item.path)
  };


  return (
    <Container>
      <ul>
        <li
          onClick={changeNav}
          className={
            navLink && window.location.pathname === item.path ? "light" : "dark"
          }
        >
          {item.title}
        </li>
      </ul>
    </Container>
  );
};

export default Navigation;

const Container = styled.div`
  ul {
    li {
      list-style: none;
      cursor: pointer;
    }
    .light {
      color: rgb(0, 0, 0);
      font-weight: 600;
    }

    .dark {
      color: rgba(0, 0, 0, 0.7);
    }
  }
`;
