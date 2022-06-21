import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';

const Logout = () => {
    const navigate = useNavigate();
    const { setIsLogedIn } = useContext(LoginContext)

    useEffect(() => {
        localStorage.removeItem("authtoken");
        setIsLogedIn(false)
        navigate('/login');
    }, [])

    return (
        <div></div>
    )
}

export default Logout