import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";

const Banner = () => {
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  const allImages = [
    "https://wallpaperaccess.com/full/267434.jpg",
    `https://wallpaperaccess.com/full/1204217.jpg`,
    `https://wallpaperaccess.com/full/1223045.jpg`,
  ];

  return (
    <Container>
      <Slider {...settings}>
        <Image></Image>
        <Image></Image>
        <Image></Image>
      </Slider>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  width: 100%;
  height: 80vh;
  `;
const Image = styled.div`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://wallpaperaccess.com/full/267434.jpg");
`;

const Shadow = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 80vh;
  background-color: rgba(0, 0, 0, 0.5);
`;
