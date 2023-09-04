import React,{useState} from "react";
import './Signup.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Card, CardContent, Stack } from "@mui/material";
const Signup=()=>{
    const[check,setcheck]=useState([]);
    const[name,setname]=useState([]);
    const[pass,setpassword]=useState([]);
    const Navigate=useNavigate()
    const Submit=async()=>{
        try{
        const res1=await axios.get("http://localhost:8000/valid/"+name);
            if(res1.data){
                alert(name+"  already exists please enter new user name")
            }
            else{
        const res=await axios.post("http://localhost:8000/input/"+name+"/"+pass);
        if(res)
        {
            alert("saved sucessfully!");
        }
        }
}
    catch(e)
    {
        alert(e);
    }
    }
    const click=()=>{
        Navigate('/login')
    }
    return(
        
        <div className="container">
            
            <div><header><h2>signup</h2></header></div>
            <div id="form">
       <div className="field">
        
        <label>username</label>
        <input className="hai" type="text" placeholder="name" onChange={(e)=>setname(e.target.value)}/>
        <br></br>
</div>

<div className="field">
    <label>password</label>
        <input type="password" placeholder="password" onChange={(e)=>setpassword(e.target.value)}/>
        <br/>
        </div>
        <div className="field">
        <button onClick={Submit}   className="button">submit</button>
        {/* </Stack> */}
        </div>
        <div className="field" id="or">
        <label >(or)</label>
        </div>
        <div className="field">
        <button onClick={click}  className="button">Login</button>
        {/* </CardContent> */}
        {/* </Card> */}
        </div>
        </div>
        </div>
        
        

        
        
    );
}
export default Signup;