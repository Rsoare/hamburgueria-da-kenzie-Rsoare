import styled from "styled-components"

export const StyledCart = styled.aside`
   width: 90%;
   margin: 0 auto;

   ul{
      width: 100%;
      display: flex;
      flex-direction: column;
      height: 15rem;
      gap: 0.8rem;
      overflow-y: auto;
      background-color: var(--grey-100);

      @media screen and ( min-width:1024px){
         height: 18rem;
      }
   }
`