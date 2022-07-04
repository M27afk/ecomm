import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Product from "../components/Product";
import { mobile } from "../resp";
const Container=styled.div``
const Title=styled.h1`margin: 20px;
${mobile({margin:"10px"})}

`
const FilterContainer=styled.div`
display: flex;
justify-content:space-between;
`
const Filter=styled.div`

margin: 20px; 
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`

const FilterText=styled.div`
font-size: 20px;
font-weight: 600;
margin: 10px;
${mobile({marginRight:"0px"})}

`
const Select=styled.select`
padding: 5px;
margin:5px;
cursor: pointer;
${mobile({ margin: "10px 0px" })}
`
const Option=styled.option`
cursor: pointer;

`
export default function ProductList () { 
    return(
        <Container>
        
        <Announcement/>
       <Title>
            Dresses
        </Title>
        <FilterContainer>
            <Filter><FilterText>Filter:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Pink</Option>
                        <Option>Blue</Option>

                    </Select>
                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>

                    </Select>
            </Filter>
            <Filter><FilterText>Sort:</FilterText>
            <Select>
                        <Option disabled selected>
                            Sort
                        </Option>
                        <Option>Newest First</Option>
                        <Option>Price: Low to high</Option>
                        <Option>Price: High to low</Option>

                    </Select>
            </Filter>
        </FilterContainer>
        <Product/>
        <Newsletter/>
        <Footer/>
        </Container> 

 ) }