import styled from "styled-components";

export const MainHeader = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding: 6em;
  padding-top: 0;
  background-color: #ffd701;
  /* background-color: #FF6464; */
  background: linear-gradient(to right, #ffed86, #ffd701); 
  height: 50vh;


  @media only screen and (max-width: 768px) {
    padding: 2.5em;
    padding-top: 0;
  }
`;

export const WrapperBig = styled.div`
  margin: 0 auto;
  padding: 0 2em;
  max-width: 800px;
  margin: auto;
`;
export const MainNav = styled.nav`
  color: #121212;

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    padding: 0;
    margin: 0;
  }
  li {
    margin: 0;
    flex: 1 1 33.33%;
    padding: 1rem 0;
    text-align: center;
    &:first-child {
      text-align: left;
      flex: 4 1 33.33%;
      justify-self: flex-end;
      @media only screen and (max-width: 768px) {
        display: none;
      }
    }
    @media only screen and (max-width: 768px) {
      font-size: 0.7em;
      flex: 1 1 50%;
    }
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.9rem;
  }
`;

export const Title = styled.h1`
  flex: 3 1 100%;
  font-weight: 700;
  letter-spacing: 2;
  line-height: 1.15;
  margin: 1.25rem 0;
  font-size: 8.5em;
  color: #121212;
  text-transform: lowercase;
  font-weight: 800;

  @media only screen and (max-width: 768px) {
    font-size: 3em;
  }
`;
export const MainContent = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    /* font-size: 3em; */
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const Info = styled.div`
  margin-top: 4rem;
  flex: 1 1 40%;
  p {
    font-size: 0.9rem;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 0;
  }
`;
