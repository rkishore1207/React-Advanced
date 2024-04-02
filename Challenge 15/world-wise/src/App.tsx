/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Pricing from "./Pages/Pricing/Pricing";
import Product from "./Pages/Product/Product";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Pages/AppLayout/AppLayout";
import './index.css';
import Login from "./Pages/Login/Login";
import CityList from "./Components/Cities/CityList"
import CountryList from "./Components/Countries/CountryList";
import City from "./Components/City/City";
import Form from "./Components/Form/Form";
import { CitiesProvider } from "./Contexts/CitiesContext";
import { Authentication } from "./Contexts/FakeAuthContext";

function App() {

  return (
    <>
      <CitiesProvider>
        <Authentication>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="pricing" element={<Pricing/>}/>
              <Route path="product" element={<Product/>}/>
              <Route path="app" element={
                  <AppLayout/>
              }>
                <Route index element={<Navigate replace to='cities'/>}/>
                <Route path="cities" element={<CityList/>}/>
                <Route path="cities/:id" element={<City/>}/>
                <Route path="countries" element={<CountryList/>}/>
                <Route path="form" element={<Form/>}/>
              </Route>
              <Route path="*" element={<PageNotFound/>}/>
              <Route path="login" element={<Login/>}/>
            </Routes>
          </BrowserRouter>
        </Authentication>
      </CitiesProvider>
    </>
  )
}

export default App;
