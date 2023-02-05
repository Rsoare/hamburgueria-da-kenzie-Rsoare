import { ButtonAddCart } from "../../ButtonAddCart"
import {StyledProductsList} from "./style"
export const ProductCard = ({product,addProduct}) => {
   
   const {name,category,price,img} = product
   
   return (
      <StyledProductsList>
         
         <img src={img} alt={name} />

         <div>
            <h2 className="Heading three">{name}</h2>
            <p className="Caption">{category}</p>
            <span className="body price">R$ {price.toFixed(2)}</span>
            <ButtonAddCart addProduct={addProduct} product={product}/>
         </div>
      
      </StyledProductsList>
   )
}
