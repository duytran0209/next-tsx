import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import img from "../../images/logo.png";
const AuthenticationPageStyles = styled.div`
  min-height: 100vh;
  .form {
    max-width: 600px;
    margin: 0 auto;
  }
  .have-account {
    margin-bottom: 20px;
    font-size: 14px;
    a {
      display: inline-block;
      color: ${(props) => props.theme.primary};
      font-weight: 500;
    }
  }
  .logo {
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
  }
`;

interface AuthenProps {
  children?: React.ReactNode;
}

const AuthenticationPage: React.FC<AuthenProps> = ({ children }) => {
  return (
    <AuthenticationPageStyles>
      <div>
        <div className="logo">
          <Link href="/">
            <Image src={img} alt="muidatperfume" />
          </Link>
        </div>

        {children}
      </div>
    </AuthenticationPageStyles>
  );
};

export default AuthenticationPage;
