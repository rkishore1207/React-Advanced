/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './index.css';
// import HomePage from "./Pages/HomePage/HomePage";
// import Pricing from "./Pages/Pricing/Pricing";
// import Product from "./Pages/Product/Product";
// import PageNotFound from "./Pages/PageNotFound";
// import AppLayout from "./Pages/AppLayout/AppLayout";
// import Login from "./Pages/Login/Login";

import CityList from "./Components/Cities/CityList"
import CountryList from "./Components/Countries/CountryList";
import City from "./Components/City/City";
import Form from "./Components/Form/Form";
import { CitiesProvider } from "./Contexts/CitiesContext";
import { Authentication } from "./Contexts/FakeAuthContext";
import { Suspense, lazy } from "react";
import Spinner from "./Components/Spinner/Spinner";

const HomePage = lazy(()=>import('./Pages/HomePage/HomePage'));
const Product = lazy(()=>import('./Pages/Product/Product'));
const Pricing = lazy(()=>import('./Pages/Pricing/Pricing'));
const PageNotFound = lazy(()=>import('./Pages/PageNotFound'));
const AppLayout = lazy(()=>import('./Pages/AppLayout/AppLayout'));
const Login = lazy(()=>import('./Pages/Login/Login'));


// dist/assets/index-a4f491ca.css   29.92 kB │ gzip:   5.03 kB
// dist/assets/index-51d868c9.js   512.42 kB │ gzip: 147.72 kB

function App() {

  return (
    <>
      <CitiesProvider>
        <Authentication>
          <BrowserRouter>
            <Suspense fallback={<Spinner/>}>
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
            </Suspense>
          </BrowserRouter>
        </Authentication>
      </CitiesProvider>
    </>
  )
}

export default App;
