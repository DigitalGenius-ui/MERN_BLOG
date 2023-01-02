import React from "react";
import styled from "styled-components";
import { ImBlogger } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";

const Navigation = () => {
  return (
    <Container>
      <Logo>
        <ImBlogger />
      </Logo>
      <User>
        <h4>Milad Amiri</h4>
        <FaUserCircle style={{ fontSize: "1.6rem" }} />
      </User>
    </Container>
  );
};

export default Navigation;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div``;
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const Avatar = styled.div``;
