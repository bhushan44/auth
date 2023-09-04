import React, { useEffect, useState } from 'react'
import axios from 'axios'   
import { useLocation } from 'react-router-dom'
import './Success.css';
const Success = () => {
  const[data,setdata]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:8000/gets" )
    .then((res)=>{
      setdata(res.data)
      console.log(res.data)
    })
    .catch((e)=>{
      alert(e)
    })
  },[])
  
  return (
    <div className="main">

      <h1 className='h1'>The List Of Registered Candidates::</h1>
        <div className='main1'>
          {
            data.map((val)=>{
              return(
                <div>
                  <h1 className='h2'>{val.name}</h1>
                  </div>
              )
            })
          }
        </div> 
    </div>
  )
}

export default Success