import React from "react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import styled from "styled-components";
interface Props {
  session: Session;
}
export const UserImg = styled.img`
  height: 100%;
`;

export const DropDown = styled.div`
  position: fixed;
  top: 48px;
  left: 15px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

export const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

const SignedInHeader: React.FC<Props> = ({ session }) => {
  const image = session?.user?.image as string;
  const name = session?.user?.name as string;
  return (
    <div>
      <SignOut>
        {session !== null ? <UserImg src={image} alt={name} /> : null}
        <DropDown>
          <span onClick={() => signOut()}>SignOut</span>
        </DropDown>
      </SignOut>
    </div>
  );
};

export default SignedInHeader;
