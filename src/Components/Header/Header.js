import React from 'react'

import {
    HeaderContainer,
    HeaderWrapper,
    HeaderTitle,
    HeaderSubtitle,
    GithubLogin
} from './'
import {
    MainHeader,
    MainContent,
    WrapperBig,
    Title,
    MainNav,
    Info
} from "./style.js";
import { config } from "../../config"

export const Header = () => {
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
    )
}
