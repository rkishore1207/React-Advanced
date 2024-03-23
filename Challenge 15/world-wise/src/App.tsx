/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Pricing from "./Pages/Pricing/Pricing";
import Product from "./Pages/Product/Product";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Pages/AppLayout/AppLayout";
import './index.css';
import Login from "./Pages/Login/Login";
import { useEffect, useState } from "react";
import CityList from "./Components/Cities/CityList"
import CountryList from "./Components/Countries/CountryList";

function App() {

  const BASE_URL = 'http://localhost:8000';
  const [cities,setCities] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  useEffect(()=>{
    async function fetchCities(){
      try{
        setIsLoading(true);
        const result = await fetch(`${BASE_URL}/cities`);
        const data = await result.json();
        console.log(data);
        setCities(data); 
      }catch(err){
        alert("Error");
        console.log(err);
      }finally{
        setIsLoading(false);
      }
    }
    fetchCities();
  },[]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="pricing" element={<Pricing/>}/>
          <Route path="product" element={<Product/>}/>
          <Route path="app" element={<AppLayout/>}>
            <Route index element={<CityList isLoading={isLoading} cities={cities}/>}/>
            <Route path="cities" element={<CityList isLoading={isLoading} cities={cities}/>}/>
            <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading}/>}/>
            <Route path="form" element={<p>form</p>}/>
          </Route>
          <Route path="login" element={<Login/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
