import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { setAuthUser } from '../state/action-creator/authUser';
import { useDispatch } from 'react-redux'

const Logout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.removeItem("authtoken");
        dispatch(setAuthUser(false))
        navigate('/login');
    }, [])

    return (
        <div></div>
    )
}

export default Logout