import React from 'react'
import styled from 'styled-components';

const Categories = () => {
  return (
    <Container>
          <h1 className="title">Categories</h1>
          <div className="categories">
              <p>Nature</p>
              <p>Rain</p>
              <p>Flood</p>
          </div>
    </Container>
  );
}

export default Categories;

const Container = styled.div`
  .title {
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    margin-top: 1rem;
    font-size: 1.1rem;
    text-align: center;
    padding: 0.4rem 0;
    font-weight: 400;
  }

  .categories {
    margin-top: 1rem;
    p {
      padding: 0.4rem;
      font-size : 0.8rem;
      cursor: pointer;
      position: relative;
      transition: 400ms ease-in-out;
      :hover{
        transform: translateX(10px);
      }

      ::before{
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        border: 0.5px solid #00000034;
      }

    }
  }
`;