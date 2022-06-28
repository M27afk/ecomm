import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductItems from "./ProductItems";
const Container=styled.div`
margin-top:10px;
display: flex;
flex-wrap: wrap;
`
export default function Product()
{
    return(
        <Container>
            {
                popularProducts.map(item =>
                (
                    <ProductItems val={item} key={item.id} />
                )
                    )
            }
        </Container>
    )
}