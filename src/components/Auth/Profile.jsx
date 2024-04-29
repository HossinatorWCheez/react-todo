import './Auth.css'

import { useAuth } from "../../contexts/AuthContext"

export default function Profile() {
    const { currentUser } = useAuth()

  return (
    <strong className="profile p-2">
        Hello {!currentUser.displayName ? currentUser.email : currentUser.displayName}! 
        <img className="profileImg" src={currentUser.photoURL} alt={`${currentUser.email}'s avatar`} />
    </strong>
  )
}