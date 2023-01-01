import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='navBar'>
        <img className='busLogo' src="https://www.kindpng.com/picc/m/80-809118_bus-png-travel-bus-png-icon-transparent-png.png" alt="" />

        <h1 className='companyName'>Grippo Bus</h1>

        <div className="btnContainer">
            <NavLink to='/' className="routeBtn">Home</NavLink>
            {/* <NavLink to='/booking' className="routeBtn">Booking</NavLink> */}
            <NavLink to='/about' className="routeBtn">About</NavLink>
            {/* <NavLink to='/account' className="routeBtn">Account</NavLink> */}
        </div>
    </div>
  )
}

export default Header