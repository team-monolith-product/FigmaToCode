import React from "react";
import styled from "styled-components";

const StyledDescriptionspan01 = styled.span`
  color: black;
  font-size: 18px;
  font-family: Noto Sans;
  font-weight: 400;
  line-height: 28px;
  word-wrap: break-word;
`;

const StyledDescriptionspan02 = styled.sub`
  color: black;
  font-size: 18px;
  font-family: Noto Sans;
  font-weight: 400;
  line-height: 28px;
  word-wrap: break-word;
`;

const StyledDescriptionspan03 = styled.span`
  color: black;
  font-size: 18px;
  font-family: Noto Sans;
  font-weight: 400;
  line-height: 28px;
  word-wrap: break-word;
`;

const StyledDescriptionspan04 = styled.sup`
  color: black;
  font-size: 18px;
  font-family: Noto Sans;
  font-weight: 400;
  line-height: 28px;
  word-wrap: break-word;
`;

const StyledDescriptionspan05 = styled.span`
  color: black;
  font-size: 18px;
  font-family: Noto Sans;
  font-weight: 400;
  line-height: 28px;
  word-wrap: break-word;
`;

const StyledDescriptionspan06 = styled.sup`
  color: black;
  font-size: 18px;
  font-family: Noto Sans;
  font-weight: 400;
  line-height: 28px;
  word-wrap: break-word;
`;

const StyledDescription = styled.p`
  width: 102px;
  height: 56px;
`;

export const Description = () => {
  return (
    <StyledDescription><StyledDescriptionspan01>H</StyledDescriptionspan01><StyledDescriptionspan02>2</StyledDescriptionspan02><StyledDescriptionspan03>0</StyledDescriptionspan03><StyledDescriptionspan04> </StyledDescriptionspan04><StyledDescriptionspan05>10</StyledDescriptionspan05><StyledDescriptionspan06>100</StyledDescriptionspan06></StyledDescription>
  );
};