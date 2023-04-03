import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #1456a0;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #1456a0;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #1456a0;
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 10%;
  margin-right: 10px;
`;

const Title = styled.h2`
  font-weight: normal;
  color: #1456a0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {};
  return (
    <>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <FormHeader>
            <Image
              src={process.env.PUBLIC_URL + "/images/RRU_LOGO.png"}
              alt="rru-logo"
            />
            <Title>Admin Account </Title>
          </FormHeader>
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            name="email"
            value={email}
            placeholder="name@company.com"
          />
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            value={password}
            placeholder="••••••••"
          />
          <Button>Log In</Button>
        </Form>
      </Wrapper>
    </>
  );
}
export default Login;
