import {ArrowLeftOutlined} from "@material-ui/icons";

import {ArrowRightOutlined} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { slideItems } from "../data";
import { mobile } from "../resp";
const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
position:relative;
overflow:hidden;

${mobile({display:"none"})}
`
const Arrow=styled.div`
height: 50px;
width: 50px;
background-color: #fff7f7;
display: flex;
align-items: center;
justify-content: center;
border-radius:50%;
position: absolute;
top:0;
bottom: 0;
margin: auto;
left:${props=> props.direction === "left" && "10px"};
right:${props=> props.direction === "right" && "10px"};
opacity: 0.5;cursor: pointer;
z-index: 1;
`

const Wrapper=styled.div`
height: 100%;
display: flex;
align-items: center;
transform: translateX(${(props)=>props.slideItem * -100}vw);
transition: all 1.5s ease;
`
const Slide=styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
background-color: #${(props)=>props.bg};

`
const ImgCont=styled.div`
flex:1;
`
const Img=styled.img`
height: 70%;
`
const InfoCont=styled.div`
padding: 50px;
flex:1;
`
const Title=styled.h1`
font-size: 3em;
font-weight: 800;
`
const Desc=styled.div`
margin: 50px 0;
font-size: 20px;
letter-spacing: 3px;
font-weight: 500;
`
const Button=styled.button`
padding: 10px;
font-size:15px;
background-color: transparent;
cursor: pointer;
`

export default function Slider()
{
    const[slide,setSlide]=React.useState(0);
   function handleClick(direction)
    {
        if(direction === "left")
        {
            setSlide( slide >0 ? slide-1 : 2)
        }
        else{
            setSlide( slide <2 ? slide+1 : 0)

        }
       
    }
    return(
        <Container>
            <Arrow onClick={()=>handleClick("left")} direction="left">   
                         <ArrowLeftOutlined/>
            </Arrow>

            <Wrapper slideItem={slide}>
                {slideItems.map((items)=>(

                    <Slide key={items.id} bg={items.bg}>
                    <ImgCont>
                        <Img src={items.img}/>
                    </ImgCont>
                    <InfoCont>
                        <Title>{items.title}</Title>
                        <Desc>Buy now please please</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoCont>
                    </Slide>
                ))}

            </Wrapper>
            <Arrow onClick={()=>handleClick("right")} direction="right" >  
                          <ArrowRightOutlined/>
            </Arrow>

        </Container>
    )
}