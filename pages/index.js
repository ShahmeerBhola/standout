import Header from "./components/header"
import Products from "./components/Products"
import Products1 from "./components/Products1"
import Sales from "./components/Sales"
import Article from "./components/Article"
import Brands from "./views/Home/brands"
import Footer from "./components/Footer"
export default function Home() {
  return (
    <>
    <Header/>
    <Brands/>
    <Products/>
    <Products1/>
    <Sales/>
    <Article/>
    <Footer/>
    </>
  )
}
