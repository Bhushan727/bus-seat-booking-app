import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Seats from '../components/Seats'
import './Booking.css'

const Booking = () => {
  
  const [seat] = useState([
    "A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11","A12","A13","A14","A15","A16","A17","A18",
    "B1","B2","B3","B4","B5","B6","B7","C1","C2","C3","C4","C5","C6","C7"
  ])

  const [seatAvailable,setSeatAvailable] = useState([
        "A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11","A12","A13","A14","A15","A16","A17","A18",
        "B1","B2","B3","B4","B5","B6","B7","C1","C2","C3","C4","C5","C6","C7"
  ]);

  const [seatReserved,setSeatReserved] = useState([]);
  const [seatSelected,setSeatSelected] = useState([]);
  
  const navigate = useNavigate();
  const [name,setName] = useState('');

  useEffect(()=>{
    fetch('https://easy-gray-pig-fez.cyclic.app/seat')
    .then(res => res.json())
    .then((data)=>{
      console.log(data);  
      setSeatSelected(data)
    })
    setName(localStorage.getItem('name'))
    if(localStorage.getItem('email')===null){
      alert('Oops,Please login first')
      navigate('/account')
    }
  },[navigate]);

  const onClickData =(seat) => {
    if(seatReserved.indexOf(seat)>-1){
      setSeatAvailable(seatAvailable.concat(seat));
      setSeatReserved(seatReserved.filter(res=>res!==seat))
    }
    else{
      setSeatReserved(seatReserved.concat(seat));
      setSeatAvailable(seatAvailable.filter(res=>res!==seat))
    }
  }

  const checktrue = (div) => {
    if(seatSelected.indexOf(div)>-1){
      return false;
    }else{
      return true;
    } 
  }

  const handleSubmit = async () => {    
    const temp = seatSelected.concat(seatReserved)
    console.log(temp);

     fetch('https://easy-gray-pig-fez.cyclic.app/seat',{
      method : "POST",
      crossDomain : true,
      headers : {
        "Content-Type" : "application/json",
        Accept : "application/json",
        "Access-Control-Allow-Origin" : "*",
      },
      body : JSON.stringify({
        seatRes : temp
      }),
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data,"data");
    })  

    setSeatSelected(seatSelected.concat(seatReserved));
    setSeatReserved([]);

    alert('Bookiing confirmed')
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate('/account',{replace:true})
  }

  const handleReset = () => {
    const temp = [];
    fetch('https://easy-gray-pig-fez.cyclic.app/seat',{
      method : "POST",
      crossDomain : true,
      headers : {
        "Content-Type" : "application/json",
        Accept : "application/json",
        "Access-Control-Allow-Origin" : "*",
      },
      body : JSON.stringify({
        seatRes : temp
      }),
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data,"data");
    })
    setSeatSelected([]);

  }

  return (
    <div className='bookPage'>
        <div className="leftCont">
            <h1 className='bookingHeads'>We've partnered with the world's best bus companies</h1>
            <h3 className='bookingLine'>More than 3500 trusted travel partners across trains, busses, ferries and airport transfers</h3>

            <button onClick={handleLogout} className='logOut'>Logout</button>
            <div className='bookingDisplay'>
                <img src="https://st.redbus.in/Images/rdc/36million.svg" alt="" />
                <p className="million">10 Million+</p>
                <p className="happy">happy customers</p>
            </div>

            <div className="userName">
                <h3>Hi, {name} Reserve your Seat now, before anyone else</h3>
            </div>
            <h3 className='price'>Price per Seat : <span className='notPrice'>350$</span> 100$</h3>
            <div className="seatDetailCont">
                <h3>Total seats selected : <span>{seatReserved.length}</span></h3>
                <h3>Total Payable amount : <span>{seatReserved.length * 100}</span>$</h3>
            </div>
          
        </div>


        <div className="rightCont">
            <Seats  
            seat={seat} 
            available={seatAvailable} 
            reserved={seatReserved} 
            selected={seatSelected} 
            onClickData={onClickData}
            checktrue={checktrue}
            handleSubmit={handleSubmit} 
            />

            {
              (localStorage.getItem("email")==="bhushans727@gmail.com") &&
              <button onClick={handleReset} className='resetBtn'>Reset Seats</button>
            }
        </div>
    </div>
  )
}

export default Booking