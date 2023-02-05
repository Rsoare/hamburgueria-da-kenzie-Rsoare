import {StyledCartEmpty} from "./style"

export const CartEmpty = () => {

   return (
      <StyledCartEmpty>
         <p className="Heading three">Sua sacola está vazia</p>
         <span className="body">Adicione itens</span>
      </StyledCartEmpty>
   )
}
