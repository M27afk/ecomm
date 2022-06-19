
import { Search,Brightness2, ShoppingCart } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


const ContainerNav= styled.div`
        height:60px; 
        position: sticky;
        top: 0;
        z-index: 1;
        
        background-color:#${(props) => props.mode === "bright" ? "ffffff" : "181818"} ;
        padding:5px;
       color:${(props) => props.mode === "bright" ? "black" : "white"} ;
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
justify-content: space-between;
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
font-size: 12px;
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
align-items: center;
`
const MenuItem=styled.div`
font-size:14px;
cursor:pointer;

`


export default function Navbar()
{
    const[mode,setMode]=React.useState("bright")
    function handleClick(){
        setMode(mode==="bright" ? "night": "bright")
    }
    console.log(mode)
    return(
        
            <ContainerNav mode={mode}>
                <Wrapper>
                    <Left>
                        <Language>
                            EN
                        </Language>

                        <SearchContainer>
                          <Input></Input>
                          <Search/>
                        </SearchContainer>
                        <Brightness2 style={{cursor:'pointer'}} onClick={()=>handleClick()}/>

                    </Left>
                    <Center>
                        <Brand>Lorem.</Brand>
                    </Center>
                    <Right>
                        <MenuItem>REGISTER</MenuItem>
                        <MenuItem>SIGN IN</MenuItem>
                        <ShoppingCart style={{cursor:'pointer'}}x/>
                    </Right>
                </Wrapper>
            </ContainerNav>
        
    )
}