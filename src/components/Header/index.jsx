import logo from "../../assets/logo.svg"
import { InputSearch } from "../FormInputSearch"
import {StyledHeader} from "./style"


export const Header = ({setSearch}) => {

   return (

      <StyledHeader>

         <img src={logo} alt="Logo Burguer Kenzie " />
         <InputSearch setSearch={setSearch}/>
         
      </StyledHeader>

   )
}
