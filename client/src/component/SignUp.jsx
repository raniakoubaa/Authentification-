import React, { useState} from 'react'
import {Button, Col, Form, Row, Spinner} from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userSignUp } from '../redux/action'

const SignUp = () => {
    const {user,loading}= useSelector(state=>state)
    const [fullName, setfullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const dispatch=useDispatch()
    const HandelSubmit=(e)=>{
        e.preventDefault()
        dispatch(userSignUp({fullName,email,password,phone}))
    }
    
    
    return (
        <div className='signup'>
            { loading? <Spinner animation="border" /> 
            :
            <Form className='form_SignUp'>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Full Name
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="Full name" value={fullName} onChange={(e)=>setfullName(e.target.value)}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="Email">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Phone
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="Phone number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    </Col>
                </Form.Group>
                <Button variant="success" onClick={HandelSubmit}>Confirme</Button>
            </Form>
              }
             <Link to="/login"> <p> Do you have account </p><br/> <p>go to Login</p></Link>
        </div>
    )
}

export default SignUp