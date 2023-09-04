import React, { useState } from 'react'
import axios from 'axios';
import './Signup'
import { useNavigate } from 'react-router-dom'
// import { Card, CardContent, Stack } from '@mui/material';
import './Signup.css'

const Login = () => {
    const [name,setname]=useState([])
    const [pass,setpass]=useState([])
    const Navigate=useNavigate()
    const Submit=async()=>{
        try{
            const res=await axios.get("http://localhost:8000/check/"+name+"/"+pass)
            if(res.data){
              Navigate('/Login/success',{state:{name:name}})
            }
            else{
              alert("Incorrect Credentials")
            }
        }
        catch(e)
      {
         alert(e);
      }

    }
    const click1=()=>{
      Navigate('/Login/setpassword')

      }
  return (
    
       <div className="container">
       <div><header>Log In</header></div>
       <div className='form'>
        <div className='field'>
          <label>enter user name</label>
        <input type="text" placeholder="name" onChange={(e)=>setname(e.target.value)} />
        </div>
        <div className='field'>
          <label>enter password</label>
        <input type="password" placeholder="password" onChange={(e)=>setpass(e.target.value)} />
        </div> 
        <div className='field'>
        <button onClick={Submit}>submit</button>
        </div>
        <div className='field'>
        <button onClick={click1} >forget password</button>
        </div>
       </div>
    </div>
  )
}

export default Login