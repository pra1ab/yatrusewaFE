"use client"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const Navbar = () => {
  const { currentUser, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut()
    navigate("/signin")
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          BusTracker
        </Link>
        <div className="nav-menu">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/search" className="nav-item">
            Find Buses
          </Link>
          {currentUser ? (
            <>
              <Link to="/dashboard" className="nav-item">
                My Bookings
              </Link>
              <button onClick={handleSignOut} className="nav-item sign-out-btn">
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/signin" className="nav-item sign-in-btn">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar