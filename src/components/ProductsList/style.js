import styled from "styled-components"

export const StyledProduct = styled.ul `
display: flex;
flex-direction: row;
gap: 1rem;
overflow:auto;
width:100vw;
padding-left: 0.8rem;

@media screen and ( min-width:1024px){
      flex-direction: row;
      flex-wrap: wrap;
      width: 40rem;
      justify-content: center;
      
}

@media screen and ( min-width:1200px){
      flex-direction: row;
      flex-wrap: wrap;
      width: 49rem;
      
}`