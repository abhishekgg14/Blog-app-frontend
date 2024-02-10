import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const Add = () => {
    const [input,setInput] = new useState(
        {
            "userId":sessionStorage.getItem("userId"),
            "post":""
        }
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/pt/add",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Post added")
                    setInput(
                        {
                            "userId":"",
                            "post":""
                        }
                    )
                } else {
                    alert("somthing went wrong")
                }
            }
        )
    }
    
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="card">
                            <div class="card-body">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="from-label">Write post</label>
                                        <input type="text" className="form-control" name='post' value={input.post} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <button className="btn btn-success" onClick={readValues}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add