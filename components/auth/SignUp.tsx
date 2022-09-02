import React from "react";
import styled from "styled-components";
import { signIn } from "next-auth/react";

export const SignUpLink = styled.a`
  width: 100%;
  background-color: lightblue;
  font-weight: bold;
  padding: 17px 0;
  text-align: center;
  color: #eee;
  cursor: pointer;
  transition: all 250ms;
  border-radius: 0px;
  flex: 0.3;
  &:hover {
    background-color: #0483ee;
  }
  @media (max-width: 650px) {
    border-radius: 4px;
  }
`;
function SignUp() {
  return <SignUpLink onClick={() => signIn()}>Continue</SignUpLink>;
}

export default SignUp;
