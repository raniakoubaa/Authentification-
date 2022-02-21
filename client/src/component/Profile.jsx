import React, { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { userProfile } from '../redux/action'


const Profile = () => {
    const {user,loading}= useSelector(state=>state)
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(userProfile())
    }, [])
    const deconnexion=()=>{
      window.localStorage.clear();
     
    }
  return (
    <div>
    {loading? <Spinner animation="border" /> :
    <div>{ user&&<h1>{`Welcome ${user.fullName}`}</h1>}
    </div>
     }
     <Link to="/"><button onClick={deconnexion}>Logout</button></Link>
    </div>
  )
}

export default Profile