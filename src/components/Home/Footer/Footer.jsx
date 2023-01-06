import React from 'react';
import styled from "styled-components"

const Footer = () => {
  return (
      <Container>
          <p>&copy; Designed and Developed by Milad Amiri 2023</p>
    </Container>
  )
}

export default Footer;

const Container = styled.div`
    background-color: #fff;
    text-align: center;
    margin-top: 2rem;
    padding: 1.5rem 0;

    p{
        font-size: 0.8rem;
        color: rgba(0,0,0,0.7);
    }
`