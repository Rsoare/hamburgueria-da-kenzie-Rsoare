import { useState, useEffect } from "react"
import { api } from "./service/api"
import { ProductsList } from "./components/ProductsList"
import { Header } from "./components/Header"
import { Cart } from "./components/Cart"
import { CartTotal } from "./components/CartTotal"
import { CartEmpty } from "./components/CartEmpty"
import {StyledMain,StyledSectionCart,StyledApp,StyledTitleAside,StyledBackgroundHeader,} from "./styleApp"
import { ProductsListEmpty } from "./components/ProductsListEmpty"
import { ToastContainer, toast } from "react-toastify"

export {
   useState,
   useEffect,
   api,
   ProductsList,
   Header,
   Cart,
   CartTotal,
   CartEmpty,
   StyledMain,
   StyledSectionCart,
   StyledApp,
   StyledTitleAside,
   StyledBackgroundHeader,
   ProductsListEmpty,
   ToastContainer,
   toast,
}
