
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Cabins from "./pages/Cabins";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


function App() {

  const queryClient = new QueryClient({
    defaultOptions:{
      queries : {
        staleTime: 60*1000,
      }
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools/>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout/>}>
            <Route index element={<Navigate replace to='dashboard'/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="account" element={<Account/>}/>
            <Route path="cabins" element={<Cabins/>}/>
            <Route path="bookings" element={<Bookings/>}/>
            <Route path="settings" element={<Settings/>}/>
            <Route path="users" element={<Users/>}/>
          </Route>
          <Route path="login" element={<Login/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;
