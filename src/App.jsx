import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import CoinPage from './pages/CoinPage'



function App() {
 

  return (
    <>
    
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route> 
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/coin/:id" element={<CoinPage/>}></Route>
      {/* <Route path="/compare" element={<ComparePage/>}></Route>
      <Route path="/watchlist" element={<WatchlistPage/>}></Route> */}
    </Routes>
    
    </BrowserRouter>
    
    
    </>
  )
}

export default App
