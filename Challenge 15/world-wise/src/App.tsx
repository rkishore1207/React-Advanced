import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Pricing from "./Pages/Pricing/Pricing";
import Product from "./Pages/Product/Product";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Pages/AppLayout";
import './index.css';
import Login from "./Pages/Login/Login";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="pricing" element={<Pricing/>}/>
          <Route path="product" element={<Product/>}/>
          <Route path="app" element={<AppLayout/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
