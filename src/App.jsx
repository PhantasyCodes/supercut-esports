import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './routes/Home'
import './App.css'

function App() {
  const location = useLocation()
  return (
    <>
      <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route path='' element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
