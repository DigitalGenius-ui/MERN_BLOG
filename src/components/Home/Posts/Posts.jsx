import React from 'react'
import styled from 'styled-components'
import Post from "./Post";
import { useGetAllPostsQuery } from "../../../redux/api/apiSlice";

const Posts = () => {
  const { data, isLoading, isError } = useGetAllPostsQuery();
  console.log(data)
  return (
    <Container>
      {data?.map((item) => (
        <Post key={item._id} post = {item} />
      ))}
    </Container>
  )
}

export default Posts

const Container = styled.div``