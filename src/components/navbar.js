
import { Search } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


const ContainerNav= styled.div`
        height:60px; 
        position: sticky;
        top: 0;
        z-index: 1;
        
        background-color:white ;
        padding:5px;
       //color: white;
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
const SearchContainer=styled.div`
border: 0.5px solid lightgray;
margin-left:25px;
padding:5px;
display: flex;
align-items: center;

`
const Input=styled.input`
border: none;
height: 100%;
`

const Center=styled.div`
flex:2;
align-items: center;

`
const Brand=styled.h1`
padding: 0;
margin: 0;
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
        
            <ContainerNav>
                <Wrapper>
                    <Left>
                        <Language>
                            EN
                        </Language>
                        <SearchContainer>
                          <Input></Input>
                          <Search/>
                        </SearchContainer>
                    </Left>
                    <Center>
                        <Brand>Lorem.</Brand>
                    </Center>
                    <Right>
                        <MenuItem>REGISTER</MenuItem>
                        <MenuItem>SIGN IN</MenuItem>

                    </Right>
                </Wrapper>
            </ContainerNav>
        
    )
}