import { SendRounded } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../resp";
const Container= styled.div`
height: 60vh;
background-color: #fcf5f5;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Title= styled.h1`
font-size: 70px;
margin-bottom: 20px;
${mobile({fontSize:"45px",margin:"20px 0 0 0"})}
`

const Desc= styled.h6`
font-size: 25px;
font-weight: 300;
${mobile({fontSize:"20px",margin:"10px"})}

`

const InputContainer= styled.div`
width: 50%;
height: 40px;
display: flex;
justify-content: space-between;
margin-bottom: 40px;
${mobile({justifyContent:"center"})}
`

const InputField= styled.input`
flex: 11;
padding-left: 10px;
border: 1px solid lightgray;
font-size: 17px;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Button=styled.button `
flex: 2;
background-color: teal;
display: flex;
justify-content: center;
align-items: center;
border: none;
cursor: pointer;
color: white;
`
export default function Newsletter()
{
    return(
        <Container>
            <Title>
                Newsletter
            </Title>
            <Desc>
                Don't want to miss out on latest offers and deals?
                Subscribe to our newsletter now!
            </Desc>
            <InputContainer>
                <InputField placeholder="Your email"/>
                <Button>
                <SendRounded/>

                </Button>
            </InputContainer>
        </Container>
    )
}