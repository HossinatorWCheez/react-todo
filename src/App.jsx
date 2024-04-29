//stylesheets
import './App.css'

//Images
import SnowFlake1 from './assets/snowflake1.png'
import SnowFlake2 from './assets/snowflake2.png'
import SnowFlake3 from './assets/snowflake3.png'

//components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ToDos from './components/ToDos/ToDos'
import Categories from './components/Categories/Categories'
import NotFound from './components/NotFound/NotFound'
import About from './components/About/About'
import AuthProvider from './contexts/AuthContext'
import Login from './components/Auth/Login'
import ProtectedRoute from './components/ProtectedRoute'
import { Snowfall } from 'react-snowfall'

export default function App() {
  const snowflake1 = document.createElement('img')
  snowflake1.src = SnowFlake1
  const snowflake2 = document.createElement('img')
  snowflake2.src = SnowFlake2
  const snowflake3 = document.createElement('img')
  snowflake2.src = SnowFlake3

  const images = [snowflake1, snowflake2, snowflake3]


  return (
        <section className='App site-container'>
          <Snowfall style={{position: 'fixed', width: '100vw', height: '100vh'}} images={images} radius={[4, 16]} snowflakeCount={275} />
          <AuthProvider>
            <Router>

              <Navigation />
              <Routes>
                <Route path='/' element={<ProtectedRoute><ToDos /></ProtectedRoute>} />
                <Route path='/todos' element={<ProtectedRoute><ToDos /></ProtectedRoute>} />
                <Route path='/categories' element={<ProtectedRoute><Categories /></ProtectedRoute>} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<NotFound />} />
              </Routes>

            <Footer />
            </Router>
          </AuthProvider>
        </section>

      // Super dope snow fall npm package (react-snowfall)
      // https://github.com/cahilfoley/react-snowfall
      // https://www.npmjs.com/package/react-snowfall
  )
}
