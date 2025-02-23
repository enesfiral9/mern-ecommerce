import { Fragment } from "react"
import Cart from "../components/Cart/Cart"
import Header from "../components/Layout/Header/Header"
import Footer from "../components/Layout/Footer/Footer"


function CartPage() {
  return (
    <Fragment>
        <Header />
        <Cart />
        <Footer/>
    </Fragment>
    
  )
}

export default CartPage