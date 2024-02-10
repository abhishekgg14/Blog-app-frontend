import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const [input,setInput]=new useState(
        {
            "email":"",
            "pass":""
        }
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/signin",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status == "success") {
                    sessionStorage.setItem("userId",response.data.userdata._id)
                    navigate("/add")
                    setInput(
                        {
                            "email":"",
                            "pass":""
                        }
                    )
                }
                if (response.data.status == "invalid user") {
                    alert("invalid user")
                }
                if (response.data.status == "incorrect password") {
                    alert("incorrect password")
                }
            }
        )
    }
  return (
    <div>
         <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="card">
                    <div class="card-body">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="from-label">Email ID</label>
                                <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="from-label">Password</label>
                                <input type="password" className="form-control" name='pass' value={input.pass} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValues}>Login</button>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"></div>
                        </div>
                        <a href="/signup" class="card-link">New users click here</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Login