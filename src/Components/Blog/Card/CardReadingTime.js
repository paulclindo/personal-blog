import React from "react";
import styled from "styled-components";

const ReadingTime = styled.p`
  color: #b5b5b5;
  font-size: 15px;
  position: absolute;
  bottom: 19px;
  right: 50px;
`;

export const CardReadingTime = ({ time }) => (
  <ReadingTime>{time} Min Read</ReadingTime>
);
