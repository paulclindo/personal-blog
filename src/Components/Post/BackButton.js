import styled from "styled-components";

export const BackButton = styled.button`
  outline: none;
  font-size: 22px;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  
  :hover {
    background-color: black;
    color: white;
  }

  :before {
    /* content: "\\27A4"; */
    position: absolute;
    transform: translateY(-50%) rotate(180deg);
    left: -100px;
    font-size: 16px;
    top: 54%;
  }
`;
