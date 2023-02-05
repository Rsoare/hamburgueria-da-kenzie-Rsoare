import styled from "styled-components"

export const StyledCartProduct = styled.li`
   position: relative;
   display: flex;
   flex-direction: row;
   gap: 0.8rem;
   padding: 0.5rem;

   img{
      height: 4.3rem;
      width: 4.3rem;
      background-color: var(--grey-200);
      border-radius: 8px;
   }

   div{
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      width: 8rem;
   }

   @media screen and ( min-width:1024px){
         justify-content: space-evenly;
      }
`