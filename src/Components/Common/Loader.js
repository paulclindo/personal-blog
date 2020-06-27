import React from 'react'
import styled from 'styled-components'

import loader from '../../Assets/Img/loader.svg'

const LoaderContainer = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);

  img {
    height: 128px;
  }
`

export const Loader = () => (
  <LoaderContainer>
    <img src={loader} alt="Loading..." />
  </LoaderContainer>
)