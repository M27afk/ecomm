import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Info=styled.div`
display: flex;
opacity: 0;
position: absolute;
left: 0;
top: 0;
background-color: rgba(0, 0, 0, 0.2);
justify-content: space-evenly;
align-items: center;
height: 100%;
width: 100%;
transition: all 0.5s ease;
`
const Container=styled.div`
flex:1;
min-width: 280px;
height: 350px;
position: relative;
margin: 5px;
background-color: #f5fbfd;
    &:hover ${Info}{
        opacity: 1;
        cursor:pointer;
    }
`

const Image=styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`

const Icon=styled.div`
height: 40px;
width: 40px;
border-radius:50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.3s ease;
   &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
        cursor:pointer;
   }
`

export default function ProductItems({val})
{
    return(
        <Container>
            <Image src={val.img}/>
            <Info>
                <Icon> <ShoppingCartOutlined/> </Icon>
                <Icon> <SearchOutlined/> </Icon>
                <Icon> <FavoriteBorderOutlined/> </Icon>
            </Info>
        </Container>
    )
}