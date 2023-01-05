import React from "react";
import styled from "styled-components";
import Post from "./Post";
import { BlogContext } from "../../../Context/Context";

const Posts = () => {
  const { posts, loading } = BlogContext();

  if(loading) return <h1>Loading...</h1>
  return (
    <Container>
      {posts.map((item) => (
        <Post key={item._id} post={item} />
      ))}
    </Container>
  );
};

export default Posts;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 3rem 0;
  display: flex;
  align-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;
