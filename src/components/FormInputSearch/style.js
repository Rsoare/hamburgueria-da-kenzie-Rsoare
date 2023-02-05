import styled from "styled-components"

export const StyledDivForm = styled.div`
   position: relative;

   input{
      width: 17rem;
      height: 3rem;
      border: 2px solid #E0E0E0;
      border-radius: 8px;
      font-size: 1rem;
      padding-left: 10px;
   }
   
   button{
      position: absolute;
      background-color: var(--primary-color);
      color: #ffffff;
      font-size: 0.95rem;
      border: none;
      height: 2.5rem;
      right: 10px;
      top: 7px;
      border-radius: 8px;
   }

   button:hover{
   background-color: var(--primary-color-2);
}`