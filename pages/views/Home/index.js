import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/Footer'
import Brands from './brands'
import Products from '../../components/Products'
import Products1 from '../../components/Products1'
import Sales from '../../components/Sales'
import Article from '../../components/Article'
function index() {
  return (
    <div>
        <Header/>
        <Brands/>
        <Products/>
        <Products1/>
        <Sales/>
        <Article/>
        <Footer/>
    </div>
  )
}

export default index