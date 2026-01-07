import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: black;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.25px;
  word-wrap: break-word;
`;

const StyledP2 = styled.p`
  align-self: stretch;
  color: black;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledAlertDialogue = styled.div`
  width: 480px;
  padding: 24px;
  background: white;
  border-radius: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 24px;
  display: inline-flex;
`;

export const Alertdialogue = () => {
  return (
    <StyledAlertDialogue>
      <StyledP>영어가 아닌 제목</StyledP>
      <StyledP2>영어가 아닌 본문</StyledP2>
    </StyledAlertDialogue>
  );
};