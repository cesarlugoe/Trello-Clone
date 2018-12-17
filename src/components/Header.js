import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/logo.svg';


const Wrapper =  styled.div`
display: flex;
justify-content: center;
padding: 20px 0 0;
`

const Image = styled.svg`
    background-image: url(${Logo});
    width: 65px;
    height: 65px;
    background-repeat: no-repeat;
    filter: drop-shadow(3px 3px 3px #333);
    transition: all 200ms ease-in-out;
    cursor: pointer;
    &:hover {
        filter: drop-shadow(6px 6px 6px #333);
        transition: all 200ms ease-in-out;
        transform: scale(1.10) rotate(-4.5deg);
    }
`
const Header = () => (
  <Link to='/'>
      <Wrapper>
          <Image />
      </Wrapper>
  </Link>
)

export default Header;
