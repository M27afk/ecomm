import {Email, GitHub, LocationCity, PhoneAndroid, Twitter, WhatsApp } from "@material-ui/icons";
import Link from '@material-ui/core/Link';

import React from "react";
import styled from "styled-components";
const Container=styled.div`
display: flex;

`
const Left=styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo=styled.h1`
font-size: 40px;
margin: 2px;
`

const Desc=styled.p`
font-weight: 400;
`
const SocialContainer=styled.div`
display: flex;
`
const Icon=styled.div`
height: 40px;
width: 40px;
border-radius: 50%;
background-color: #${props=>props.color};
display: flex;
justify-content: center;
align-items: center;
color: white;
margin: 5px;
cursor:pointer;
`
const Center=styled.div`
flex:1;
display: flex;
flex-direction: column;
justify-content: center;


`
const Title=styled.h3`
margin: 30px 0;
padding: 0;
`
const List=styled.ul`
list-style: none;
margin: 0;
padding: 0;
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const ListItem=styled.li`
cursor: pointer;
width: 50%;
margin-bottom: 10px;
`
const Right=styled.div`
flex:1;
`

export default function Footer()
{
    return(
        <Container>
            <Left>
                <Logo>Lorem.</Logo>
                <Desc>Developed with ♥️ by <a href="https://github.com/m27afk">Manushreshta B L</a></Desc>
               <SocialContainer> 
                
                    <Link href="https://github.com/m27afk" >
                    <Icon color="000000">
                        <GitHub />
                    </Icon>
                    </Link>
               
                    <Link href="https://twitter.com/manushreshta27" target="_blank" >
                    <Icon color="55ACEE">
                        <Twitter />
                    </Icon>
                    </Link>

                    <Link href="mailto:manushreshta27@gmail.com" target="_blank" >
                    <Icon color="BB001B">
                        <Email />
                    </Icon>
                    </Link>

                <Icon color="25D366">
                    <WhatsApp/>
                </Icon>
                </SocialContainer> 
            </Left>
            <Center>
                    <Title>Useful Links</Title>
                <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms and Conditions</ListItem>
                <ListItem>Privacy policy</ListItem>

                </List>
            </Center>
            <Right>
                <Title>
                    Contact
                </Title>
                <Desc><LocationCity/> #3018 Mansion House</Desc>
                <Desc><PhoneAndroid/> +91 10112 22012</Desc>
            </Right>
        </Container>
    )
}