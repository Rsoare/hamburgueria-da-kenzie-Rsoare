import styled from "styled-components"

export const StyledProductsListEmpty = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 1rem;
   padding: 0.8rem;
   line-height: 2rem;
   background-color: var(--grey-100);
   height: 12rem;
   width: 100%;
   border-radius: 8px;

   button{
      width: 18rem;
      height: 3rem;
      border: none;
      background-color: var(--grey-200);
      border-radius: 8px;
      font-size:1rem ;
      font-weight: 600;
   }

   button:hover{
      background-color: var(--grey-300);
      color: var(--grey-100);
   }

   @media screen and ( min-width:1024px){
      width: 40rem;
      height: 20rem;
}
`