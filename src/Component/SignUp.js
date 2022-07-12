import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../state/action-creator/authUser'

const SignUp = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handelSubmit = async (e) => {
        e.preventDefault()
        const { name, email, password } = credentials
        dispatch(signUp(name, email, password))
        navigate("/", { replace: true });
    }
    const onChange = e => setCredentials({ ...credentials, [e.target.name]: e.target.value })

    return (
        <div className='container mt-3'>
            <h2>Create an account to use My App</h2>
            <form onSubmit={handelSubmit}>
                <div className="mb-3 my-4">
                    <label htmlFor="name" className="form-label"> Name</label>
                    <input type="text" className="form-control" onChange={onChange} id="name" name='name' aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 my-4">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={onChange} id="email" name='email' aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={onChange} id="password" name='password' />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" onChange={onChange} id="cpassword" name='cpassword' />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>)
}

export default SignUp