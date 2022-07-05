import React from "react";
import styled from "styled-components";
import { mobile } from "../resp";
import {Link } from "react-router-dom";

const Container=styled.div`
height: 100vh;
width: 100vw;
background-image: linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%);
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper=styled.div`
width: 40%;
padding: 0px;
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
${mobile({width:"75%"})}

`
const Title=styled.h1`
font-size: 30px;
margin: 15px;
`
const Form=styled.form`
display: flex;
flex-wrap: wrap;
margin: 5px;
`
const Input=styled.input`
flex: 1;
min-width: 60%;
margin: 10px 0;
padding: 10px;
border: 1px solid lightgray;
  box-shadow: 0px;
  outline: none;
  border-radius: 5px;
  transition: 0.15s;
:focus{
  border-color: #00aec9;
  box-shadow: 0 0 0 0.2rem rgba(19, 162, 228, 0.25);
  border: none;
}

`
const LinkNav=styled.a`
margin: 5px 0;
text-decoration:underline;
cursor: pointer;
`

const Query=styled.div`
display: flex;
`
const ButtonHome=styled.button`
margin: 5px;
padding: 10px 20px;
cursor: pointer;
background: transparent;
border: none;

`
const Button=styled.button`
margin: 5px;
padding: 10px 20px;
cursor: pointer;

`


export default function Login () { return( 
    <Container>
        <Wrapper>
            <Title>
                SIGN IN
            </Title>
            <Form>
                <Input placeholder="Username"/>
                <Input placeholder="Password" type="password"/>
            </Form>
            <LinkNav>Forgot Username?</LinkNav>
            <LinkNav>Forgot Password?</LinkNav>
            <Query>
            <Link style={{textDecoration: 'none',color:'black'}} to="/"><ButtonHome>Home</ButtonHome></Link>
            <Button>LOG IN</Button>
            </Query>
        </Wrapper>

    </Container>
 ) }