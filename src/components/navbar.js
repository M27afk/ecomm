
import { Search,Brightness2, ShoppingCart } from '@material-ui/icons'
import React from 'react';
import styled from 'styled-components';
import {Link } from "react-router-dom";
import {mobile} from "../resp";
const ContainerNav= styled.div`
        height:60px; 
        position: sticky;
        top: 0;
        z-index: 2;
        background-color:#${(props) => props.mode === "bright" ? "ffffff" : "181818"} ;
      
       color:${(props) => props.mode === "bright" ? "black" : "white"} ;

       ${mobile({height:"50px"})}
    `
const Wrapper=styled.div`
padding:10px 20px;
display:flex;
align-items: center;
justify-content:space-between;
text-align:center;

${mobile({padding:"5px 0"})}
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
${mobile({display:"none",width:"0", flex:"0"})};
`
const SearchContainer=styled.div`
border: 0.5px solid lightgray;
margin-left:25px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 2px;

`
const Input=styled.input`
flex: 8;
border: none;
height: 100%;
font-size: 15px;
margin: 2px 0;
padding-left: 5px;
background-color:#${(props) => props.mode === "bright" ? "ffffff" : "181818"} ;
       color:${(props) => props.mode === "bright" ? "black" : "white"} ;
       ${mobile({width:"50px"})}
`

const Center=styled.div`
flex:2;
align-items: center;

`
const Brand=styled.h1`
padding: 0;
margin: 0;
font-weight: 1500;
${mobile({fontSize:"24px"})}
`


const Right=styled.div`
flex:1;
display: flex;
justify-content:space-evenly;
align-items: center;
${mobile({flex:2,justifyContent:"center"})}
`
const MenuItem=styled.div`
font-size:14px;
cursor:pointer;
${mobile({fontSize:"12px",marginLeft:"2px"})}
`


export default function Navbar()
{
    const[mode,setMode]=React.useState("bright")
    function handleClick(){
        setMode(mode==="bright" ? "night": "bright")
    }
       return(
           
            <ContainerNav mode={mode}>
                <Wrapper>
                    <Left>
                        <Language>
                            EN
                        </Language>

                        <SearchContainer>
                          <Input mode={mode}/>
                          <Search style={{cursor:'pointer'}}    />
                        </SearchContainer>
                        <Brightness2 style={{cursor:'pointer'}} onClick={()=>handleClick()}/>

                    </Left>
                    <Center>
                        <Link style={{textDecoration: 'none',color:'black'}} to="/"><Brand>Lorem.</Brand></Link>
                    </Center>
                    <Right>
                        <Link style={{textDecoration: 'none',color:'black'}} to="/register"><MenuItem>REGISTER</MenuItem></Link>
                        <Link style={{textDecoration: 'none',color:'black'}} to="/login"><MenuItem>SIGN IN</MenuItem></Link>
                        <ShoppingCart style={{cursor:'pointer'}}x/>
                    </Right>
                </Wrapper>
            </ContainerNav>
            
           
        
    )
}