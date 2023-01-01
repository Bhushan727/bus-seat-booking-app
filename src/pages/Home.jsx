import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {

  const navigate = useNavigate();
  const handleBookBtn = () => {
    if(localStorage.getItem("name")){
      navigate('/booking')
    }else{
      navigate('/account')
    }
  }
  return (
    <div className='homeContainer'>

        <h1 className='bannerHeading'>Take a bus and Enjoy your trip!, with Grippo Bus</h1>
        <h3 className='bannerSlogan'>A new way of travelling, <br /> Book your Seat now</h3>
        {
          localStorage.getItem("name") && <p className='bannerName'>Hi, {localStorage.getItem("name")}</p>
        }
        <button className='bookBtn' onClick={handleBookBtn}> Book now</button>
    </div>
  )
}

export default Home