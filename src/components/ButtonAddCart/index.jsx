import { StyledAddCart } from "./style"

export const ButtonAddCart = ({addProduct,product}) => {
   
   return (
      <StyledAddCart type="button" onClick={() => addProduct(product)}>Adicionar</StyledAddCart>
   )
}
