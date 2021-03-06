import React from "react";
import styled from "styled-components";
import { mobile } from "../resp";
import {Link } from "react-router-dom";


const Container=styled.div`
height: 100vh;
width: 100vw;
background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper=styled.div`
width: 40%;
padding: 20px;
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
${mobile({width:"75%"})}
`
const Title=styled.h1`
font-size: 30px;
`
const Form=styled.form`
display: flex;
flex-wrap: wrap;
`
const Input=styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0 0;
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
const Agreement=styled.p`

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
padding: 10px 20px;
cursor: pointer;
`


export default function Register () { return( 
    <Container>
        <Wrapper>
            <Title>
                Register now!
            </Title>
            <Form>
                <Input placeholder="Name"/>
                <Input placeholder="Email ID"/>
                <Input placeholder="Mobile Number" type="number"/>
                <Input placeholder="Username"/>
                <Input placeholder="Password" type="password"/>
                <Input placeholder="Confirm Password" type="password"/>

            </Form>
            <Agreement>By creating an account, I adhere to <b>Privacy Policy</b> of the company</Agreement>
            <Query>
            <Link style={{textDecoration: 'none',color:'black'}} to="/"><ButtonHome>Home</ButtonHome></Link>
            <Button>LOG IN</Button>
            </Query>
        </Wrapper>

    </Container>
 ) }