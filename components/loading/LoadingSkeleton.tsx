import React from "react";
import styled from "styled-components";

interface LoadingSkeletonProps {
  height?: string;
  marginBottom?: string;
  radius?: string;
  className?: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  className = "",
  height = "",
  marginBottom = "",
  radius = "",
}) => {
  return (
    <LoadingSkeletonStyled
      height={height}
      marginBottom={marginBottom}
      className={className}
      radius={radius}
    ></LoadingSkeletonStyled>
  );
};

const LoadingSkeletonStyled = styled.div<LoadingSkeletonProps>`
  width: 100%;
  height: ${(props) => props.height};
  margin-bottom: ${(props) => props.marginBottom};
  background-color: #eee;
  border-radius: ${(props) => props.radius};
  background-image: linear-gradient(
    110deg,
    #ececec 8%,

    #f5f5f5 18%,

    #ececec 33%
  );

  background-size: 200% 100%;

  animation: 1.5s shine linear infinite;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;
export default LoadingSkeleton;
