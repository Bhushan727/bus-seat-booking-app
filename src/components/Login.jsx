import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    fetch("https://easy-gray-pig-fez.cyclic.app/login",{
            method : "POST",
            crossDomain : true,
            headers : {
                "Content-Type" : "application/json",
                Accept : "application/json",
                "Across-Control-Allow-Origin" : "*",
            },
            body : JSON.stringify({
                email,
                password
            }),
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data,"userRegister");

            localStorage.setItem('name',data.name)
            if(data.status==="ok"){
                alert(`Successfully logged in`)
                localStorage.setItem("name",data.data.name)
                localStorage.setItem("email",data.data.email)
                navigate('/booking',{replace:true})
            }else{
                alert(data.error)
                console.log(data.error);
            }
        })
        e.preventDefault();
        setEmail('')
        setPassword('')


  }

  return (
    <div>
         <form action="" className="loginForm" onSubmit={handleSubmit}>
                <h1 className='loginFormHead'>Login</h1>
                <div className="inputCont">
                    <label htmlFor="email">Email : </label>
                    <input type="email" name='email' placeholder='Enter Email' value={email} required onChange={e=>setEmail(e.target.value)} />
                </div>

                <div className="inputCont">
                    <label htmlFor="password">Password : </label>
                    <input type="password" name='password' placeholder='Enter Password' value={password} required onChange={e=>setPassword(e.target.value)} />
                </div>

                <button className="credBtns loginBtn" type='submit'>Login</button>
                <p className='newPara'>new User? <Link to='/signup'>SignUp</Link></p>
            </form>
    </div>
  )
}

export default Login