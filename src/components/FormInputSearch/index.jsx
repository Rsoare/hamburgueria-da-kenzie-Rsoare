import { useState } from "react"
import {StyledDivForm} from "./style"

export const InputSearch = ({setSearch}) => {

   const [seachValue,SetSearchValue] = useState("")

   const submit = (event) => {

      event.preventDefault()

      setSearch(seachValue)
      
      SetSearchValue("")
   }

   return (
      
      <form onSubmit={submit}>

         <StyledDivForm>
            <input type="text" value={seachValue} onChange={(event) => SetSearchValue(event.target.value)}placeholder = "Digitar Pesquisa" />
            <button type="submit" onClick={submit}>Pesquisar</button>
         </StyledDivForm>
         
      </form>
   )
}
