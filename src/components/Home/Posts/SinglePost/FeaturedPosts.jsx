import styled from "styled-components";
import React from "react";

const FeaturedPosts = () => {
  return (
    <Container>
      <h1 className="feature">Featured Posts</h1>
      <Post>
        <div className="image">
          <img
            src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
            alt=""
          />
        </div>
        <div className="contents">
          <h1>This is the blog title</h1>
          <p>Lorem ipsum dolor sit amet consectetur...</p>
        </div>
      </Post>
      <Post>
        <div className="image">
          <img
            src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
            alt=""
          />
        </div>
        <div className="contents">
          <h1>This is the blog title</h1>
          <p>Lorem ipsum dolor sit amet consectetur...</p>
        </div>
      </Post>
      <Post>
        <div className="image">
          <img
            src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
            alt=""
          />
        </div>
        <div className="contents">
          <h1>This is the blog title</h1>
          <p>Lorem ipsum dolor sit amet consectetur...</p>
        </div>
      </Post>
    </Container>
  );
};

export default FeaturedPosts;

const Container = styled.div`
  width: 100%;

  .feature {
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    text-align: center;
    padding: 0.4rem 0;
    font-weight: 400;
  }
`;

const Post = styled.div`
  display: flex;
  padding: 0.5rem 0.5rem 0.3rem 0.5rem;
  cursor: pointer;
  transition: 100ms ease-in-out;
  border-bottom: 1px solid #0000002c;

  :nth-child(2n + 1) {
    flex-direction: row-reverse;
  }

  :last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-bottom: none;
  }

  .image {
    flex: 1;

    img {
      width: 4rem;
      height: 4rem;
      opacity: 0.7;
    }
  }

  .contents {
    flex: 2;

    h1 {
      font-size: 0.8rem;
      padding-bottom: 0.3rem;
    }

    p {
      font-size: 0.7rem;
    }
  }
`;
