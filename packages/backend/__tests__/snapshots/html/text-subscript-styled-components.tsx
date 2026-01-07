import React from "react";
import styled from "styled-components";

const StyledDescription = styled.sub`
  width: 102px;
  height: 56px;
  color: black;
  font-size: 18px;
  font-family: Noto Sans;
  font-weight: 400;
  line-height: 28px;
  word-wrap: break-word;
`;

export const Description = () => {
  return (
    <StyledDescription>Hello, World!</StyledDescription>
  );
};