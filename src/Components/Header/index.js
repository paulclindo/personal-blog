import React from "react";
import {
  MainHeader,
  MainContent,
  WrapperBig,
  Title,
  MainNav,
  Info
} from "./style.js";
import { config } from "../../config";

export default function Header() {
  return (
    <MainHeader>
      <WrapperBig>
        <MainNav>
          <ul>
            <li>
              <a href="http://paulccari.com/">{config.subtitle}</a>
            </li>
            <li>
              <a href="http://paulccari.com/portfolio.html">Portfolio</a>
            </li>
            <li>
              <a href="https://www.paulccari.com/contact.html">Contact me</a>
            </li>
          </ul>
        </MainNav>
        <MainContent>
          <Title className="header-title">{config.title}</Title>
          <Info>
            <h4>Inspiration</h4>
            <p>Providing the latest tips for developers and designers.</p>
          </Info>
        </MainContent>
      </WrapperBig>
    </MainHeader>
  );
}
export { HeaderContainer } from './HeaderContainer'
export { HeaderWrapper } from './HeaderWrapper'
export { HeaderTitle } from './HeaderTitle'
export { HeaderSubtitle } from './HeaderSubtitle'
export { Header } from './Header'
export { GithubLogin } from './GithubLogin'
