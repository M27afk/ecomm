import React from "react";
import styled from "styled-components";

const Container=styled.div`
background-color: teal;
color:white;
padding: 5px;
font-weight:500;
letter-spacing: 1px;
font-size: 14px;
display: flex;
justify-content: center;
align-content: center;
`
export default function Announcement()
{
    return(
        <div>
            <Container>
                Friday sale is now live! Shop and get upto 40% off on selected products!
            </Container>
        </div>
    )
}