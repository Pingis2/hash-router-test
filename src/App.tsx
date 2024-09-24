import './App.css'
import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Contacts } from './pages/Contacts'

function App() {

  return (
    <>
      <HashRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
