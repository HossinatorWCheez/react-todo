import './Auth.css'

import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import Profile from "./Profile"

export default function Logout() {
    const { logout } = useAuth()
    const navigate = useNavigate()

    function handleAuth() {
        logout()
        navigate('/')
    }

  return (
    <div className="logout pb-3">
        <Profile />
        <button onClick={handleAuth} className="btn btn-info" id="logoutBtn">Logout</button>
    </div>
  )
}