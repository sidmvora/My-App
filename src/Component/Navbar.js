import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports';


const Navbar = () => {
  let location = useLocation();
  const user = useSelector(state => state.auth)

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">My App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === "/Note" ? "active" : ""}`} aria-current="page" to="/Note">Inotebook</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === "/List" ? "active" : ""}`} to="/List">List</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === "/About" ? "active" : ""}`} to="/About">About</Link>
                </li>
              </ul>
              {!!user ? <div className='text-info mx-3'>{user.name.toUpperCase()}</div> : ''}

                {!user ? <form className="d-flex" role="search"> <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link><Link className="btn btn-primary mx-1" to="/Signup" role="button">SignUp</Link>  </form>: <Link className="btn btn-primary mx-1" to="/logout" role="button">Logout</Link>}
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
export default Navbar;
