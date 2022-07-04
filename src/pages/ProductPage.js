import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../resp";

const Container = styled.div`

`
const Wrapper = styled.div`

display: flex;
justify-content: center;
padding: 50px;
${mobile({flexDirection:"column"})}
`
const ImgContainer = styled.div`
flex: 1;
`
const Image = styled.img`
width: 100%;
object-fit:cover;
height: 90vh;
${mobile({height:"40vh"})}

`
const Info = styled.div`
flex:1;

`

const Title = styled.h1`font-weight: 200;
`
const Desc = styled.p`margin: 20px 0px;`
const Price = styled.span`
font-size: 40px;
font-weight: 100;
margin: 10px;
`
const Price1 = styled.span`
font-size: 20px;
text-decoration:line-through;
font-weight: 100;
`

const FilterContainer = styled.div`
width: 50%;
margin: 30px 0;
display: flex;
justify-content: space-between;
align-items:center;
${mobile({width:"100%"})}

`
const Filter = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 400;
margin: 5px;
`
const FilterColor = styled.div`
border-radius: 50%;
background-color: ${props => props.color};
height:20px;
width: 20px;
margin: 0 5px;
transition: all ease 0.2s;
cursor:pointer;
&:hover{
    transform: scale(1.5);
}
`
const SizeSelect = styled.select``
const Option = styled.option``

const AddContainer = styled.div`
width: 50%;
display: flex;
justify-content: space-between  ;
align-items: center;
${mobile({width:"100%"})}


`
const AmountContainer = styled.div`
display: flex;
justify-content: space-between ;
align-items:center;
`
const Amount = styled.span`
border: 1px solid teal;
height:20px;
width: 20px;
border-radius: 30%;
margin: 0 5px;
padding: 5px;
display: flex;
justify-content: center;
align-items: center;
`
const Button = styled.button`

font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
padding: 10px;
border:2px solid teal;
background-color: white;
cursor: pointer;
&:hover{
background-color: teal;
color: white;
}
`

export default function ProductPage() {
    return (
        <Container>
            
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://www.pngarts.com/files/2/Watch-PNG-Transparent-Image.png" />
                </ImgContainer>
                <Info>
                    <Title>
                        Titon Classic Collection - MG5000
                    </Title>
                    <Desc>
                        lorem ipsum ancicniernoircneoinrconcdncksjcnkjscndksdncsknc dckndc cuec ercnoeirc  ciducnoerc ecn rcoi dcic i  eee sa;a cuo nm,dca  ee sala up namde
                    </Desc>
                    <Price>₹3499</Price>
                    <Price1>₹4199</Price1>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color:</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="gold" />
                            <FilterColor color="silver" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size:</FilterTitle>
                            <SizeSelect>
                                <Option disabled selected> S </Option>
                                <Option>M</Option>
                                <Option>L</Option>
                                <Option>XL</Option>

                            </SizeSelect>

                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </Info>
            </Wrapper>

            <Newsletter />
            <Footer />
        </Container>

    )
}