import { ButtonRemoveCart } from "../../ButtonRemoveCart"
import { StyledCartProduct } from "./style"

export const RenderCartProduct = ({CartProduct,removeCartProducts}) => {
   const {name,category,img} = CartProduct
   
   return (
      <StyledCartProduct>

         <img src= {img} alt={name} />
            <div>
               <h2 className="Heading three">{name}</h2>
               <p className="Caption">{category}</p>
            </div>
         <ButtonRemoveCart removeCartProducts={removeCartProducts} CartProduct={CartProduct}/>
         
      </StyledCartProduct>
   )
}
