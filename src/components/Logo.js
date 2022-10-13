import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

//Logo Nav
const LogoText = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: ${props =>props.theme.fontxxxl};
color: red; 
transition: all 0.2s ease;
&:hover{
    transform: scale(1.1);
}
`
//Logo Nav Color also here

const Logo = () => {
    return (
        <LogoText>
          <Link to="/">
            Rascal Land
          </Link>
        </LogoText>
    )
}

export default Logo