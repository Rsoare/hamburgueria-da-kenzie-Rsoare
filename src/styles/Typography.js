import {createGlobalStyle} from "styled-components" 

export const GlobalTypography = createGlobalStyle`

.Heading.one{
   font-size: 1.62rem;
   font-weight: 700;
   color: var(--grey-400);
}

.Heading.two{
   font-size: 1.37rem;
   font-weight: 700;
   color: var(--grey-400);
}

.Heading.three{
   font-size: 1.12rem;
   font-weight: 700;
   color: var(--grey-400);
}

.Heading.four{
   font-size: 0.875rem;
   font-weight:700;
   color: var(--grey-400);
}

.Headline{
   font-size: 1rem;
   font-weight: 600;
   color: var(--grey-400);
}

.body{
   font-size: 0.875rem;
   font-weight:400;
   color: var(--grey-300);
}

.body.price{
   font-size: 0.875rem;
   font-weight:400;
   color: var(--primary-color);
}

.Caption{
   font-size: 0.75rem;
   font-weight: 400;
   color:var(--grey-300);
}

`