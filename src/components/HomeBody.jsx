import styled from "styled-components";
import React from "react";
import image1 from "../Photos/image1.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  flex-direction: column;
  padding: 100px;
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  font-size: 60px;
  font-weight: bold;
`;

const Image = styled.img`
  height: 350px;
`;

function HomeBody() {
  return (
    <Wrapper>
      <Left>
        <Text style={{ color: "#1456A0" }}>What's </Text>
        <Text style={{ color: "#C9B278" }}>Available</Text>
        <Text style={{ color: "#1456A0" }}>In Cafe's ?</Text>
      </Left>
      <Right>
        <Image src={image1} alt="My image" />
      </Right>
    </Wrapper>
  );
}

export default HomeBody;
