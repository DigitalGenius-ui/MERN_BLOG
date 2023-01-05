import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { BlogContext } from "../../../Context/Context";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { posts, loading } = BlogContext();
  const newPost = posts.slice(0, 3);
  const folder = "http://localhost:5000/upload/";
  const navigate = useNavigate();


  let bannerSlider = newPost.map((item, i) => (
    <Slide key={i}>
      <img src={folder + item.imageFile} alt="newImage" />
      <div className="title">
        <h1>
          {item.title && item.title.substring(0, 30)}
          {item.title.length > 30 && "..."}
        </h1>
        <p>
          {item.description && item.description.substring(0, 200)}
          {item.description.length > 200 && "..."}
        </p>
        <Icons>
          <div className="icon">
            <AiOutlineHeart className="like" />
            <span style={{ fontSize: "0.7rem" }}>12</span>
          </div>
          <div className="icon">
            <FaRegComment style={{ fontSize: "0.9rem" }} />
            <span style={{ fontSize: "0.7rem" }}>12</span>
          </div>
          <div className="icon">
            <FiBarChart2 style={{ transform: "rotate(90deg)" }} />
            <span
              onClick={() => navigate(`/post/${item._id}`)}
              style={{ fontSize: "0.7rem" }}
            >
              Read More
            </span>
          </div>
        </Icons>
      </div>
    </Slide>
  ));

  return (
    <Container>
      {posts && <Slider {...settings}>{bannerSlider}</Slider>}
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

const Slide = styled.div`
  background-color: #000;
  height: 500px;
  position: relative;

  img {
    opacity: 0.4;
    width: 100%;
    height: 100%;
  }

  .title {
    position: absolute;
    inset: 0;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    h1 {
      text-transform: uppercase;
      letter-spacing: 0.3rem;
    }

    p {
      width: 60%;
      margin: 0 auto;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 60%;

  .icon {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    cursor: pointer;
  }
`;
