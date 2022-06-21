import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../App'

const PrivateRoute = (props) => {
    const { isLogedIn } = useContext(LoginContext)
    let navigate = useNavigate();

    useEffect(() => {
        if (!isLogedIn) {
            navigate("/login");
        }
    }, [])

    return (
        props.children
    )
}

export default PrivateRoute