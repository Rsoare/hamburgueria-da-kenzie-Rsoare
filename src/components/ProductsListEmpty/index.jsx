import {StyledProductsListEmpty} from "./styled"

export const ProductsListEmpty= ({setSearch}) => {

   return (
      
      <StyledProductsListEmpty >
         <h2 className="Heading one">Não foi Encontrado nenhum produto dessa categoria</h2>
         <button type="button" onClick={()=> setSearch("")}>Voltar para lista</button>
      </StyledProductsListEmpty>
   )
}
