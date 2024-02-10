import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const Viewall = () => {
    const [data,setData]=new useState([])
    const getData=()=>{
        axios.post("http://localhost:3001/api/pt/view",data).then(
            (response)=>{setData(response.data)}
        )
    }
    useEffect(()=>{getData()},[])
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Comment</th>
                                    {/* <th scope="col">Last</th> */}
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value,index)=>{
                                            return <tr>
                                            <td>{value.userId.name}</td>
                                            <td>{value.post}</td>
                                            <td>{value.postdate}</td>
                                        </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall