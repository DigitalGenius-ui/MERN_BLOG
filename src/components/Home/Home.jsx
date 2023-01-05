import React from "react";
import styled from "styled-components";
import Posts from "./Posts/Posts";
import Banner from "./Banner/Banner";
import Filter from "./Filter/Filter";

const Home = () => {
  return (
    <Container>
      <Banner />
      <Filter/>
      <Posts />
    </Container>
  );
};

export default Home;

const Container = styled.div``;
