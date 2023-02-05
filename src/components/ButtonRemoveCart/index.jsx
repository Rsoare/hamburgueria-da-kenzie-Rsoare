
import {StyledButtonRemove} from "./style"

export const ButtonRemoveCart = ({removeCartProducts,CartProduct}) => {
   const {id} = CartProduct
   
   return (
      <StyledButtonRemove type="button" onClick={() => removeCartProducts(id)}>Remover</StyledButtonRemove>
   )
}
