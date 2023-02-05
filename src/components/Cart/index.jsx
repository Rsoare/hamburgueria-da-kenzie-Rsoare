import { RenderCartProduct } from "./CartProduct"
import {StyledCart} from "./style"

export const Cart = ({CartProducts,removeCartProducts}) => {

   return (
      <StyledCart>
         <ul>
            {
               CartProducts.map(CartProduct =>(<RenderCartProduct key={CartProduct.id} CartProduct={CartProduct} removeCartProducts={removeCartProducts}/>))
            }
         </ul>
      </StyledCart>
   )
}
