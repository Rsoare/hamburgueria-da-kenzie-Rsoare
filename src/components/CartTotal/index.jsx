import { StyledCartTotal } from "./style"

export const CartTotal = ({CartProducts,removeAllCartProducts}) => {

   const total = CartProducts.reduce((previousValue,currentValue)=>{
      return previousValue + Number(currentValue.price)
   },0)

   return (
      <StyledCartTotal>
         
         <div>
            <span className="Headline">Total</span>
            <span className="body">R$ {total.toFixed(2)}</span>
         </div>

         <button type="button" onClick={() => removeAllCartProducts()}>Remover todos</button>

      </StyledCartTotal>
   )
}