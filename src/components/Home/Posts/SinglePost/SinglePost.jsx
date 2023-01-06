import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import FeaturedPosts from "./FeaturedPosts";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Categories from "./Categories";
import { BlogContext } from "../../../../Context/Context";

const SinglePost = () => {
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { setPostId, isAuth } = BlogContext();

  const folder = "http://localhost:5000/upload/";
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const getSinglePost = async () => {
      try {
        const { data } = await axios.get(`/posts/${id}`);
        setPost(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    getSinglePost();
  }, [id]);

  const deletePost = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`);
      window.location.replace("/");
    } catch (error) {
      console.log(error.message);
    }
    };
    
  const editPosts = (id) => {
    setPostId(id);
    navigate("/addPost")
  }

  return (
    <Container>
      <Flex>
        <PostContent>
          <ImageFile>
            {post.imageFile && <img src={folder + post.imageFile} alt="" />}
          </ImageFile>
          <Contents>
            <div className="head">
              {post.tags && (
                <span style={{ fontSize: "0.7rem" }}>{post.tags[0]}</span>
              )}
              <div className="actions">
                <p>Created At {moment(post.createdAt).format("dd MMM yyy")}</p>
                <span onClick={() => editPosts(post._id)}>
                  <FiEdit
                    style={{
                      fontSize: "1.6rem",
                      color: "green",
                      pointerEvents: "none",
                    }}
                  />
                </span>
                <span onClick={deletePost}>
                  <RiDeleteBin5Line
                    style={{
                      fontSize: "1.7rem",
                      color: "#ba2121",
                      pointerEvents: "none",
                    }}
                  />
                </span>
              </div>
              <h1>{post.title}</h1>
            </div>
            <p className="desc">{post.description}</p>
          </Contents>
          <Footer>
            <h1>Author : Milad Amiri</h1>
          </Footer>
        </PostContent>

        <PostCategory>
          <FeaturedPosts />
          <Categories />
        </PostCategory>
      </Flex>
    </Container>
  );
};

export default SinglePost;

const Container = styled.div`
  width: 80%;
  margin: 2rem auto;
`;

const Flex = styled.div`
  display: flex;
  gap: 1rem;
`;

const PostContent = styled.div`
  flex: 3;
`;

const ImageFile = styled.div`
  img {
    width: 100%;
    height: 23rem;
    object-fit: cover;
    border-radius: 5px;
  }
`;
const Contents = styled.div`
  .head {
    span {
      font-size: 0.8rem;
      color: rgba(0, 0, 0, 0.7);
      font-weight: 500;
    }

    p {
      padding: 0.2rem 0 1rem 0;
      font-size: 0.9rem;
      flex: 1;
    }

    h1 {
      text-transform: uppercase;
      font-size: 1.3rem;
      padding-bottom: 1rem;
      color: rgba(0, 0, 0, 0.7);
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      span{
        cursor: pointer;
      }

      p{
        font-size: 0.9rem;
        padding-top: 0.5rem;
        color: #69260799;
      }
    }
  }

  .desc {
    color: rgba(0, 0, 0, 0.6);
    line-height: 1.8rem;

    ::first-letter {
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.6);
    }
  }
`;

const Footer = styled.div`
  h1 {
    font-weight: 400;
    font-size: 0.8rem;
    padding-top: 2rem;
    color: rgba(0, 0, 0, 0.7);
    font-weight: 600;
  }
`;

const PostCategory = styled.div`
  flex: 1;
`;
