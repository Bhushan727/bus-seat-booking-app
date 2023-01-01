import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'

const Signup = () => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();
    fetch("https://easy-gray-pig-fez.cyclic.app/signup",{
            method : "POST",
            crossDomain : true,
            headers : {
                "Content-Type" : "application/json",
                Accept : "application/json",
                "Across-Control-Allow-Origin" : "*",
            },
            body : JSON.stringify({
                name,
                email,
                password
            }),
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data,"userRegister");
            if(data.status==="ok"){
                alert(`Register Sucessful, Welcome ${name}`)
                navigate(-1);
            }else{
                alert(data.error)
            }
        })


  }

  return (
    <div className='signupContainer'>
        <div className="background"></div>
        <form action="" className="loginForm2" onSubmit={handleSubmit}>
        <Link to='/account'><div className="cross">X</div></Link>
                <h1 className='loginFormHead'>Signup</h1>

                <div className="inputCont">
                    <label htmlFor="name">Name : </label>
                    <input type="text" name='name' placeholder='Enter Name' required onChange={(e)=>setName(e.target.value)} />
                </div>

                <div className="inputCont">
                    <label htmlFor="email">Email : </label>
                    <input type="email" name='email' placeholder='Enter Email' required onChange={e=>setEmail(e.target.value)} />
                </div>

                <div className="inputCont">
                    <label htmlFor="password">Password : </label>
                    <input type="password" name='password' placeholder='Enter Password' required onChange={e=>setPassword(e.target.value)} />
                </div>

                <button className="credBtns signupBtn" type='submit'>Sign Up</button>

            </form>
    </div>
  )
}

export default Signup