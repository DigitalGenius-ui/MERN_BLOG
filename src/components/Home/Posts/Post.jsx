import React from "react";
import styled from "styled-components";
import moment from "moment";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const Icon = ({ icon, text, size }) => {
  return (
    <>
      <div className="icon">
        {icon}
        <span style={{ fontSize: size }}>{text}</span>
      </div>
    </>
  );
};

const Post = ({ post }) => {
  let folder = "http://localhost:5000/upload/";

  return (
    <Container>
      <Image>
        <img src={folder + post.imageFile} alt="newImage" />
      </Image>
      <Contents>
        <div>
          <Head>
            <p>POSTED ON : {moment(post.createdAt).format("ddd MMM yyyy")}</p>
            <h3>
              {post.title.substring(0, 20)}
              {post.title.length > 20 && "..."}
            </h3>
          </Head>
          <Body>
            <p>
              {post.description.substring(0, 119)}
              {post.description.length > 119 && "..."}
            </p>
          </Body>
        </div>
        <Icons>
          <Icon text="12" size="0.7rem" icon={<AiOutlineHeart />} />
          <Icon text="12" size="0.7rem" icon={<FaRegComment />} />
          <Link to={`/post/${post._id}`}>
            <Icon text="Read More" size="0.7rem" icon={<FiBarChart2 />} />
          </Link>
        </Icons>
      </Contents>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  width: 15rem;
  background-color: #fff;
  box-shadow: 0px 0px 15px 0.2px #e4e4e4;
  display: flex;
  flex-direction: column;
`;
const Image = styled.div`
  img {
    width: 15rem;
    height: 10rem;
    object-fit: cover;
  }
`;
const Contents = styled.div`
  padding: 0.7rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  `;

const Head = styled.div`
  padding-bottom: 0.8rem;

  p {
    font-size: 0.65rem;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 600;
  }

  h3 {
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 1rem;
    padding-top: 0.2rem;
  }
`;
const Body = styled.div`

  p {
    font-size: 0.8rem;
    padding-bottom: 1rem;
    line-height: 1.5rem;
    color: rgba(0, 0, 0, 0.66);
    text-transform: capitalize;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;

  .icon {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    cursor: pointer;
  }

  a{
    color: #000;
    text-decoration: none;
  }
`;
