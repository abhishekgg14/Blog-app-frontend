import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {
    const [data,setData]=new useState(
        {
            "name":"",
            "age":"",
            "phone":"",
            "address":"",
            "pin":"",
            "email":"",
            "pass":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(data)
        axios.post("http://localhost:3001/api/signup",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Registered new Account")
                    setData(
                        {
                            "name":"",
                            "age":"",
                            "phone":"",
                            "address":"",
                            "pin":"",
                            "email":"",
                            "pass":""
                        }
                    )
                } else {
                    alert("Signup failed")
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
                                            <label htmlFor="" className="from-label">Name</label>
                                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                                        </div>
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                            <label htmlFor="" className="from-label">Age</label>
                                            <input type="text" className="form-control" name='age' value={data.age} onChange={inputHandler}/>
                                        </div>
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                            <label htmlFor="" className="from-label">Phone</label>
                                            <input type="text" className="form-control" name='phone' value={data.phone} onChange={inputHandler}/>
                                        </div>
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                            <label htmlFor="" className="from-label">Address</label>
                                            <input type="text" className="form-control" name='address' value={data.address} onChange={inputHandler}/>
                                        </div>
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                            <label htmlFor="" className="from-label">Pin Code</label>
                                            <input type="text" className="form-control" name='pin' value={data.pin} onChange={inputHandler}/>
                                        </div>
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                            <label htmlFor="" className="from-label">Email ID</label>
                                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                                        </div>
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                            <label htmlFor="" className="from-label">Password</label>
                                            <input type="text" className="form-control" name='pass' value={data.pass} onChange={inputHandler}/>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <button className="btn btn-success" onClick={readValues}>Register</button>
                                        </div>
                                    </div>
                                    <a href="/" class="card-link">Back to Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup