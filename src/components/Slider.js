import {ArrowLeftOutlined} from "@material-ui/icons";

import {ArrowRightOutlined} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
background-color: coral;
position:relative;
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
`
export default function Slider()
{
    return(
        <Container>
            <Arrow direction="left">   
                         <ArrowLeftOutlined/>
            </Arrow>
            <Arrow direction="right">  
                          <ArrowRightOutlined/>
            </Arrow>

        </Container>
    )
}