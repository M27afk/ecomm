import React from "react";
import styled from "styled-components";

/*const Container= styled.div`
position: relative;
margin: 3px;
height: 70vh;
grid-column: span 3;
`*/
const Image=styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`
const Button=styled.button`
display: none;
border: none;
padding: 10px;
background: #ffffff;
cursor: pointer;
`
const Info= styled.div`
position: absolute;
background: rgba(0,0,0, .3) ;
top: 0;left: 0;
height: 100%;
width: 100%;

color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

&:hover{
    background: rgba(0,0,0, .5) ;
    
}
&:hover ${Button} {
    display: block;
  }

transition: all ease 0.5s;
`

const Title=styled.h1`letter-spacing:4px;`

export default function CategoryItems({val})
{
    return(
        <div class="grid-item">
           <Image src={val.img}/>
            <Info> 
        <Title>{val.title}</Title>

            <Button>SHOP NOW</Button>
            </Info>
           
        </div>

    )
}