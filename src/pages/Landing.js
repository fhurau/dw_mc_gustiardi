import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Dummy } from '../dummy/Dummy'


const Landing = () => {
    const Navigate = useNavigate()
    const handlenavigate = () =>{
        Navigate("/");
    }
  return (
    <div>
        <div>
            {Dummy.map((item =>{
                return(
                    <div className='bg wd' onClick={}>
                        <div>{item.username }</div>
                        <div>
                            <img src={item.image} alt="" />
                        </div>
                        <div>
                            <p>{item.follower}</p>
                        </div>
                        <div>
                            <p>{item.following}</p>
                        </div>

                    </div>
                )
            }))}
        </div>
    </div>
  )
}

export default Landing