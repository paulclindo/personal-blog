import styled from "styled-components";

export const BlogContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 60px 80px;
  margin: -80px auto 2rem;
  width: 100%;
  max-width: 940px;
  padding: 20px 10px;
  @media (max-width: 700px){
    grid-template-columns: 100%;
    padding: 0;
    grid-gap: unset;
    grid-row-gap: 1rem;
  }
`;
