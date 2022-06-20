import { Send } from "@material-ui/icons";
import { mobile } from "../responsive";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fcf5f5;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "50px" })}
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center", fontSize: "15px" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #ffff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  border-radius: 4px;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  border-radius: 4px;
  background-color: #008080;
  color: #ffff;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter </Title>
      <Desc>Get Timely Updates From Your Favorite Products.</Desc>
      <InputContainer>
        <Input placeholder="Enter Your E-mail" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
