import './Auth.css'

import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

export default function Login() {
    const { login } = useAuth()
    const navigate = useNavigate()

    async function handleAuth() {
        await login()
        navigate('/')        
    }

  return (
    <section className="login">
        <Container>
            <Card className="mt-5 border-dark text-center login">
                <button onClick={handleAuth} className="btn btn-success" id='loginBtn'>Login w/ Github</button>
            </Card>
        </Container>
        <article className='login'>
            <iframe className='login' id='login' src="https://lottie.host/embed/a65db855-aeba-415a-ad06-b2ea90890a03/MYbDjpI1bX.json"></iframe>
        </article>
    </section>
  )
}