import React from 'react'
import styled from 'styled-components'
import Forms from './Forms/Forms'
import Navigation from './Navigation/Navigation'
import Posts from './Posts/Posts'

const Home = () => {
  return (
      <Container>
          <Navigation />
          <Posts />
    </Container>
  )
}

export default Home;

const Container = styled.div``