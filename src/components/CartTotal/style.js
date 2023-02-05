import styled from "styled-components"

export const StyledCartTotal = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
width: 90%;
margin: 0 auto;
background-color: var(--grey-100);
border-top: solid 2px var(--grey-200);
height: 7rem;
border-bottom-left-radius:8px;
border-bottom-right-radius: 8px;
padding: 0.8rem;

div{
   display: flex;
   justify-content: space-between;
}

button{
   width: 100%;
   max-width: 23rem;
   background-color: var(--grey-200);
   border: none;
   border-radius: 8px;
   height: 7rem;
   font-size: 1rem;
   color: var(--grey-300);
   align-self: center;

}

button:hover{
   background-color: var(--grey-300);
   color: var(--grey-100);
}
`