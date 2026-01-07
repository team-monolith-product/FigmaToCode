import React from "react";
import styled from "styled-components";

const StyledVerylonglonglonglonglonglonglonglongtext = styled.p`
  width: 185px;
  color: black;
  font-size: 16px;
  font-family: Noto Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const VeryLongLongLongLongLongLongLongLongText = () => {
  return (
    <StyledVerylonglonglonglonglonglonglonglongtext>Very long long long long long long long long text<br/></StyledVerylonglonglonglonglonglonglonglongtext>
  );
};