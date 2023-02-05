import styled from "styled-components"

export const  StyledCartEmpty = styled.div`
width: 90%;
margin: 0 auto;
height: 12rem;
background-color: var(--grey-100);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2rem;
border-bottom-left-radius:8px;
border-bottom-right-radius: 8px;

@media screen and ( min-width:1024px){
      height: 18rem;
   }
`
