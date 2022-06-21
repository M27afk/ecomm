//import styled from "styled-components";
import React from "react";
import {categories} from "../data"
import CategoryItems from "./CategoryItems";
/*const Container =styled.div`
display: grid;
grid-template: auto/ repeat(6,1fr);
justify-content: space-around;
`*/
export default function Category(){
    return(
        <div class="category">
            {
                categories.map(item =>(
                    <CategoryItems val={item} key={item.id}/>
                ))
            }
        </div>
    )
}