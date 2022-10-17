import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Carousel from '../Carousel'
import Button from '../Button'
import {dark} from '../../styles/Themes';


const Section= styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
position: relative;

`

const Container = styled.div`
width: 75%;
margin: 0 auto;
//background-color: lightblue;

display: flex;
justify-content: center;
align-items: center;

`
const Box =styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Title = styled.h2`

font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.body};
align-self: flex-start;
width: 80%
margin: 0 auto;
`
const SubText = styled.p`

font-size: ${props => props.theme.fontlg};
color: ${props => props.theme.body};
align-self: flex-start;
width: 100%
margin: 10rem auto;
font-weight: 400;
`
const SubTextLight = styled.p`

font-size: ${props => props.theme.fontmd};
color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
align-self: flex-start;
width: 80%
margin: 3rem;
font-weight: 400;

`


const ButtonContainer = styled.div`
width: 80%;
margin: 1rem auto;
align-self: flex-start;
`

const About = () => {
    return (
        <Section>
            <Container>
            <Box> <Carousel /></Box>
                <Box> 
                            <Title>
                                Little Rascals
                            </Title>

                            <SubText>
                            Rascal Land is an animated kids cartoon series based on a diverse group of children in the market of toddlers to youth, ages 18 months to 8 years old, who represent all walks of life.
                            Little Rascals’ cast includes fun and lively blend of personalities, making the show relatable for viewers.
                            </SubText>

                            <SubTextLight>
                            Rascal Land is a brand of integrity and is not company based or reliant on overnight success like the rug pull scheme and NFT project scams. 
                            It has various sectors that will allow the brand to thrive. Educational value, moral development, and financial literacy of our youth. 
                            Such financial literacy concepts are specific to crypto, NFTs, gaming, and animation.
                            </SubTextLight>

                            <ButtonContainer>
                            <ThemeProvider theme = {dark}>
                            <Button text = "JOIN US" link = "#"/>
                            </ThemeProvider>
                            </ButtonContainer>        

                </Box>
            </Container>
        </Section>
    )
}

export default About