import {useState,useEffect,api,ProductsList,Header,Cart,CartTotal,CartEmpty,StyledMain,StyledSectionCart,StyledApp,StyledTitleAside,StyledBackgroundHeader,ProductsListEmpty,ToastContainer,toast,} from "./imports"
import "react-toastify/dist/ReactToastify.css"

function App() {

   const localStorageProducts = localStorage.getItem("@BurguerKenzie:Products") 

   const [products,setProducts] = useState([])
   const [CartProducts,SetCartProducts] = useState(localStorageProducts ? JSON.parse(localStorageProducts) : [])
   const [search,setSearch] = useState("")


   useEffect(() => {
      async function loadProducts() {
         
         try{
            const response = await api.get("products")
            const currentData = response.data
            setProducts(currentData)
         }
         catch{
            toast.error("Não foi possivel Abri a lista de produtos")
            console.error
         }
      }
      loadProducts()
   },[])


   useEffect (() => {
      localStorage.setItem("@BurguerKenzie:Products",JSON.stringify(CartProducts))
   },[CartProducts])


   const addProduct = (selectedProduct) => {
      
      if(CartProducts.some((product) => product.id === selectedProduct.id)){

         toast.error("Esse produto ja foi selecionado")

      } else{
         SetCartProducts([...CartProducts, selectedProduct])
         toast.success("Produto adicionado ao carrinho")
      }
   }


   const removeCartProducts = (productId) =>{
      const newCartProducts = CartProducts.filter(CartProduct =>(CartProduct.id !== productId))
      SetCartProducts(newCartProducts)
      toast.success("O produto foi removido")
   }


   const removeAllCartProducts = () =>{
      SetCartProducts([])
      toast.success("Todos os produtos foram removidos")
   }


   const searchProducts =  products.filter(product => (
      search == "" ? true : (product.name.toLowerCase().trim().includes(search.toLowerCase().trim()))
   ))
      
   
   return (
      <StyledApp>

         <StyledBackgroundHeader>
            <Header setSearch={setSearch}/>  
         </StyledBackgroundHeader>

            <StyledMain>
               
               <section>
                     {
                        searchProducts.length == 0 && !products.length == 0 ? (
                           <ProductsListEmpty setSearch={setSearch}/>):(
                        <ProductsList searchProducts={searchProducts} addProduct={addProduct}/>)
                     }
               </section>
      
               <StyledSectionCart>

                  <StyledTitleAside>
                     <h2>Carrinho de Compras</h2>
                  </StyledTitleAside>

                  { 
                     CartProducts.length == 0 ? (
                        <CartEmpty/>
                        ): (<>
                           <Cart CartProducts={CartProducts} removeCartProducts={removeCartProducts}/>
                           <CartTotal CartProducts={CartProducts} removeAllCartProducts={removeAllCartProducts} />
                        </>)
                  }

               </StyledSectionCart>

            </StyledMain>

            <ToastContainer
            position="top-right"
            autoClose={3500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />

      </StyledApp>
   )
}

export default App