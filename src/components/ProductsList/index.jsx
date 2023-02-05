import {ProductCard} from "./Product"
import {StyledProduct} from "./style"
export const ProductsList = ({searchProducts,addProduct}) => {
   
   return (
      <StyledProduct>
         {
            searchProducts.map(product =>(<ProductCard key={product.id} product={product} addProduct={addProduct}/>))
         }
      </StyledProduct>
      
   )
}
