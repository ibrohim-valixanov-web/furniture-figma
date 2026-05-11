import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Discover from './components/Home/Discover/discover'
import Browse from './components/Home/Browse/Browse'
import Products from './components/Home/Products/Products'
import Rooms from './components/Home/Rooms/Rooms'
import Gallery from './components/Home/Gallery/Gallery'
import Sofa from './components/SingleProduct/Sofa/Sofa'
import Description from './components/SingleProduct/Description/Description'
import Product from './components/SingleProduct/Product/Product'
import Totals from './components/cart/Totals/Totals'
import Price from './components/cart/Price/Price'
import Detallas from './components/chekout/Detalls/Detallas'
import Check from './components/chekout/Check/Check'

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <Discover/>
      <Browse/>
      <Products/>
      <Rooms/>
      <Gallery/>
      <Sofa/>
      <Description/>
      <Product/>
      <Totals/>
      <Price/>
      <Detallas/>
      <Check/>
    </div>
  )
}

export default App
