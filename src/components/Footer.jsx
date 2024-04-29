import { useAuth } from "../contexts/AuthContext"
import Logout from './Auth/Logout'

export default function Footer() {
  const { currentUser } = useAuth()
    return (
      <footer className="text-center bg-dark p-4 footer">
        {currentUser && <Logout />}
          <strong>&copy; {new Date().getFullYear()} Ethan Anderson-Alexander, All Rights reserved</strong>
      </footer>
    )
  }