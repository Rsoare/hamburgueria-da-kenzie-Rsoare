import styled from "styled-components"

export const StyledProductsList = styled.li`
display: flex;
flex-direction: column;
min-width: 15rem;
height: 19rem;
border: 2px solid #E0E0E0;
border-radius: 5px;
gap: 1rem;


img{
   height: 9rem;
   object-fit: contain;
   background: var(--grey-100);
}

div{
   display: flex;
   flex-direction: column;
   gap: 0.8rem;
   padding-left: 0.8rem;
}
`