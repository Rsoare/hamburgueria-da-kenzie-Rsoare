import React from 'react'
import {GlobalReset} from "../../styles/Reset"
import {GlobalStyles} from "../../styles/GlobalStyle"
import {GlobalTypography} from "../../styles/Typography"

export const GlobalStyle = () => {
   return (
      <div>
      <GlobalReset/>
      <GlobalStyles/>
      <GlobalTypography/>
      </div>
   )
}
