import React from 'react'
import "./styles.css"
import MobileDrawer from './MobileDrawer'
import Button from '../Button/Button'


function Header() {
  return (
    <div className="navbar">
      <h1 className='logo'>
        CryptoPulse<span style={{color: "var(--blue)"}}>.</span>
      </h1>
      <div className='links'>
        <a href="/">
          <p className='link'>Home</p>
        </a>

        <a href="/">
          <p className='link'>Compare</p>
        </a>

        <a href="/">
         <p className='link'>Watchlist</p>
        </a>

        <a href="#">
         <Button text={"Dashboard"} onClick={() => console.log("Btn Clicked")}/>
        </a>
        
        
      </div>
      <div className='mobile-drawer'>
         <MobileDrawer/>
      </div>
    </div>
  )
}

export default Header
