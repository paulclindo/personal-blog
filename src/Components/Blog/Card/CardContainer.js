import styled from "styled-components";

export const CardContainer = styled.div`
  cursor: pointer;
  height: 410px;
  border-radius: 10px;
  padding: 2rem 3rem;
  transition: 0.2s;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(21, 28, 72, 0.1) 0px 5px 24px 1px;

  :hover {
    /* background-color: #F5F5F5; */
    box-shadow: rgba(21, 28, 72, 0.1) 0px 3px 7px 0px,
      rgba(21, 28, 72, 0.1) 0px 5px 24px 1px;
  }
`;

export const AuthorContainer = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-column-gap: 1rem;
  align-items: center;
  margin-top: auto;
  div {
    grid-row: span 2;
  }
  span {
  }
  p {
    font-size: 14px;
    margin: 0;
  }
`;
export const AvatarImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;
