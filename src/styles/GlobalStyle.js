import { createGlobalStyle } from "styled-components"


export const GlobalStyles = createGlobalStyle`

:root {
   --primary-color: #27AE60;
   --primary-color-2: #93D7AF;

   --secondary-color:#EB5757;

   --grey-100: #F5F5F5;
   --grey-200: #E0E0E0;
   --grey-300: #828282;
   --grey-400: #333333;

   --primary-font: 'Inter', sans-serif;
}

body{
   font-family:var(--primary-font);
}

button {
   cursor: pointer;
   font-family: var(--primary-font);
}

input{
   font-family: var(--primary-font);
}
`