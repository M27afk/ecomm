
import React from 'react'
import styled from 'styled-components'


const Container= styled.div`
        height:60px;        
    `
const Wrapper=styled.div`
padding:10px 20px;
display:flex;
align-items: center;
justify-content:space-between;
text-align:center;
`
const Left=styled.div`
flex:1;
display: flex;
align-items: center;

`
const Language=styled.div`
font-size:14px;
cursor:pointer;

`

const Input=styled.input`
border: none;
`
const SearchContainer=styled.div`
border: 0.5px solid black;
margin-left:25px;
padding:5px;

`
const Center=styled.div`
flex:2;

`
const Brand=styled.h1`
font-weight: 1500;
`


const Right=styled.div`
flex:1;
display: flex;
justify-content:space-evenly;
`
const MenuItem=styled.div`
font-size:14px;
cursor:pointer;

`


export default function Navbar()
{
    
    return(
        <div>
            <Container>
                <Wrapper>
                    <Left>
                        <Language>
                            EN
                        </Language>
                        <SearchContainer>
                          <Input></Input>
                          I
                        </SearchContainer>
                    </Left>
                    <Center>
                        <Brand>zuDio</Brand>
                    </Center>
                    <Right>
                        <MenuItem>REGISTER</MenuItem>
                        <MenuItem>SIGN IN</MenuItem>

                    </Right>
                </Wrapper>
            </Container>
        </div>
    )
}