import styled from "styled-components"

export const StyledHeader = styled.header`
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 1.5rem;
   align-items: center;
   height: 8.6rem;


   @media screen and ( min-width:1024px){
         max-width: 1200px;
         width: 100%;
         margin: 0 auto;
         flex-direction: row;
         height: 6rem;
         justify-content: space-between;
         padding: 0 1rem;
      }
`