import styled from "styled-components";

export const StyledApp = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   
`
export const StyledBackgroundHeader = styled.div`
   background-color: var(--grey-100);
`

export const StyledMain = styled.main`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1rem;

   @media screen and ( min-width:1024px){
      margin: 0 auto;
      width: 100%;
      max-width: 1200px;
      flex-direction: row;
      align-items: flex-start;
}
` 

export const StyledSectionCart = styled.section`
width: 100%;

@media screen and ( min-width:1024px){
   align-self: flex-start;
}
`

export const StyledTitleAside = styled.div`
   width: 90%;
   margin: 0 auto;
   background-color: var(--primary-color);
   height: 3rem;
   display: flex;
   align-items: center;
   border-top-left-radius: 8px;
   border-top-right-radius: 8px;


   h2{
      font-size: 1.1rem;
      color: #ffffff;
      font-weight: 600;
      padding-left: 1rem;
   }

   @media screen and ( min-width:1024px){
         height: 4rem;
      }
`