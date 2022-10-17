import React from 'react'
import styled from 'styled-components'
import Facebook from '../Icons/Facebook'
import Banner from './Banner'
import Logo from './Logo'

const Section =styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${props => props.theme.body};


display: flex;
/* justify-content: center; */
/* align-items: center; */
flex-direction: column;

`

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;

border-bottom: 1px solid ${props => props.theme.text};
`

const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const IconList = styled.div`
display: flex;
align-items: center;
margin: 0 auto;

&>*{
    padding-right: 0.5rem;
    transform: all 0.2s ease;

    &:hover{
        transform: scale(1,2);
    }
}
`

const Footer = () => {
    return (
        <Section>
            <Banner/>
        
        <Container>
        <Left>
            <Logo/>
            <IconList>
                <a href= "https://facebook.com" target = 'blank' rel="noopener"></a>
                <Facebook/>

                <a href= "https://facebook.com" target = 'blank' rel="noopener"></a>
                <Facebook/>

                <a href= "https://facebook.com" target = 'blank' rel="noopener"></a>
                <Facebook/>

                <a href= "https://facebook.com" target = 'blank' rel="noopener"></a>
                <Facebook/>
            </IconList>
        </Left>
        </Container>
        </Section>
    )
}

export default Footer