import React from "react";
import styled from "styled-components";
const FieldStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;
  margin-bottom: 25px;
`;

interface FieldProps {
  children?: React.ReactNode;
}

const Field: React.FC<FieldProps> = ({ children }) => {
  return <FieldStyles>{children}</FieldStyles>;
};

export default Field;
