import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import image from "../images/logo_real.png";
const NotFoundPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <NotFoundPageStyled>
      <div className="page-content">
        <div className="image">
          <Image src={image} alt="notfound" />
        </div>
        <h1 className="heading">404 - Looks like lost.</h1>
        <p className="description">
          Maybe this page used to exist or you just spelled something wrong.
          Chances are your spelled something wrong, so can you double check the
          URL?
        </p>
      </div>
    </NotFoundPageStyled>
  );
};

const NotFoundPageStyled = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.black};
  color: white;
  .page-content {
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
  }
  .logo {
    display: inline-block;
    margin-bottom: 40px;
  }
  .heading {
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .description {
    max-width: 800px;
    line-height: 2;
    margin: 0 auto 40px;
  }

  .image {
    max-width: 300px;
    margin: 0 auto 40px;
  }
`;
export default NotFoundPage;
