import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";


const Login=()=>{
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

   const login=async()=>{
    console.warn(email,password)
    // let result = await fetch("http://localhost:3000/login", {
    //     method: "post",
    //     body: JSON.stringify({ email, password }),
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //   });
    //   result = await result.json();
     
      if(localStorage.getItem("user")){
       const userobject=JSON.parse(localStorage.getItem("user"));
        const user_email=userobject.email;
        const user_pass=userobject.password;
        console.log(user_email+" "+email);

        if(user_pass==password && user_email==email){
          //  
          // navigate("https://youtube-video-summary-bds6.onrender.com");
          // <href>https://youtube-video-summary-bds6.onrender.com</href>
window.open("https://youtube-video-summary-bds6.onrender.com");
        }
        else{
          alert("Please Enter correct mail/password")
        }
      }
     

    }

    return(
        <div className="register_form">
         <h1 className="h1tag text-3xl ">Form</h1>
      <div className="second">
      <input
          className="input_box"
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setemail(e.target.value)}
          
        />
        <input
          className="input_box"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
        />
        <button onClick={login} className="signupbutt  text-red-300">
          Login
        </button>
        <button
      onClick={() => navigate('/sign')}
      className="signupbutt text-red-300"
    >
      No Account
    </button>
      </div>
        </div>

    );
};

export default Login;