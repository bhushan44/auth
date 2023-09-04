// import { Card, CardContent, Stack } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react';
import './Signup.css';


const Setpassword = () => {
    const [name,setname]=useState()
    const [pass,setpass]=useState()
    const [pass1,setpass1]=useState()
    const fun=async()=>{
        if(pass==pass1){
        try{
        const res=await axios.post("http://localhost:8000/update/"+name+"/"+pass)
        if(res){
            alert("successfully updated")
        }
    }
    catch(e){
        alert(e)
    }
    }
    else{
        alert("Password didnot match")
    }
}
  return (
    <div className="container">
            
            <div><header className='r'>reset password</header></div>
            <div id="form">
       <div className="field">
        
        <label>enter name</label>
       
        <input type="name" placeholder="name" onChange={(e)=>setname(e.target.value)} />
        </div>
        <div className='field'>
            <label>enter the new password</label>
        <input type="password" placeholder="Enter the new password" onChange={(e)=>setpass(e.target.value)} />
        </div>
        <div className='field'>
            <label>re-enter password</label>
        <input type="password" placeholder="Re-enter the password" onChange={(e)=>setpass1(e.target.value)} />
        </div>
        <div className='field'>
        <button onClick={fun} >submit</button>
        </div>
        </div>
        </div>

    
  )
}

export default Setpassword