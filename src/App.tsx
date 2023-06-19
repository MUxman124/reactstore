import { Route, Routes } from "react-router-dom"
import { useEffect } from "react";
import Home from "./pages/Home";
import ProductView from "./pages/ProductView";
import Cart from "./pages/Cart";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import CheckOutPage from "./pages/CheckOutPage";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
 

  return (
    <>
      <NavBar />
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/product" element={<ProductView/>}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<CheckOutPage />}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
