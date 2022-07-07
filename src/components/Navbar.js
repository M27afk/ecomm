
import { Close, Menu, Search, ShoppingCart} from '@material-ui/icons'
import React from 'react';
import styled from 'styled-components';
import {Link } from "react-router-dom";
import {mobile,tab} from "../resp";
const ContainerNav= styled.div`
        height:60px; 
        position: sticky;
        top: 0;
        z-index: 2;
        background-color:#ffffff;
      
       color:black;

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
flex:3;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({flex:1})}
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
${mobile({marginLeft:"10px"})}
`
const Input=styled.input`
flex: 8;
border: none;
height: 100%;
font-size: 15px;
margin: 2px 0;
padding-left: 5px;
background-color:#ffffff;
       color:black;
       ${mobile({width:"50px"})}
`

const Center=styled.div`
flex:3;
align-items: center;

`
const Brand=styled.h1`
padding: 0;
margin: 0;
font-weight: 1500;
${mobile({fontSize:"24px",margin:"5px"})}
`


const Right=styled.div`
flex: 3;
display: flex;
justify-content:space-evenly;
align-items: center;
flex-direction: row;
transform: translateX(${(props)=>props.leftValue}vw);
transition:all ease-in 0.3s;
${tab({
backgroundColor: "white",
position:"absolute",
top:"50px",
left:"-100%",
height: "100vh",
width: "60%",
flexDirection: "column",
justifyContent:"center",
zIndex:20
})}
`
const MenuItem=styled.div`
font-size:14px;
cursor:pointer;
${tab({fontSize:"14px",margin:"2em 0"})}
`
const Right1=styled.div`
flex: 1;
display: flex;
justify-content:space-evenly;
align-items: center;
transition: all 0.3s ease;
`

export default function Navbar()
{

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    const [resp,setResp]=React.useState(0)
    const[enable,setEnable]=React.useState(false)
    React.useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", watchWidth)
        
        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    function menuToggle()
    {
        if(resp===0 || resp===-100)
        setResp(100)
        else
        setResp(-100)
        
        setEnable(!enable)
    }
       return(
           
            <ContainerNav>
                
                <Wrapper>
                    <Left>
                        <Language>
                            EN
                        </Language>

                        <SearchContainer>
                          <Input placeholder="Search.." />
                          <Search style={{cursor:'pointer'}}    />
                        </SearchContainer>
                        
                    </Left>
                    <Center>
                        <Link style={{textDecoration: 'none',color:'black'}} to="/"><Brand>Lorem.</Brand></Link>
                    </Center>
                    <Right leftValue={resp}>
                        <Link style={{textDecoration: 'none',color:'black'}} to="/register"><MenuItem>REGISTER</MenuItem></Link>
                        <Link style={{textDecoration: 'none',color:'black'}} to="/login"><MenuItem>SIGN IN</MenuItem></Link>
                        <Link style={{textDecoration: 'none',color:'black'}} to="/productpage"><MenuItem>PRODUCT PAGE</MenuItem></Link>
                    </Right>
                     <Right1>
                     <ShoppingCart style={{cursor:'pointer'}}/>
                    {((windowWidth < 768 && (!enable))) && <Menu onClick={menuToggle}/>}
                    {(enable) && <Close onClick={menuToggle}/>}
                    </Right1>   
                </Wrapper>  
                   
              
                
            </ContainerNav>
            
           
        
    )
}
