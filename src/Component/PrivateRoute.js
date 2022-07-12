import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';

const PrivateRoute = props => {
    let navigate = useNavigate();
    const user = useSelector(state => state.auth)
    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [])

    if (!user) {
        return null
    }
    return (
        props.children
    )
}

export default PrivateRoute