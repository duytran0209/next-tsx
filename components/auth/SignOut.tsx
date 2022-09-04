import React from "react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import PrimaryButton from "../PrimaryButton";
interface Props {
  session: Session;
}

const SignOut: React.FC<Props> = ({}) => {
  return <PrimaryButton onClick={() => signOut()} title={"Sign Out"} />;
};

export default SignOut;
