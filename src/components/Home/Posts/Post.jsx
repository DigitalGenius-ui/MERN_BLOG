import React from 'react'
import styled from 'styled-components';

const Post = ({post}) => {
  return (
    <Container>
      <Image>
        <img src={post.imageFile} alt="newImage" />
        <Contents>
          <h3>{ post.title}</h3>
          <p>{ post.description}</p>
        </Contents>
      </Image>
    </Container>
  )
}

export default Post

const Container = styled.div``;
const Image = styled.div``;
const Contents = styled.div``;