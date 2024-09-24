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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio sit molestiae expedita, nisi aut nobis cum ducimus praesentium consequuntur accusamus, fugiat ad iste, reiciendis cumque nulla esse veniam animi.</p>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
              <p>bajs bajs bajs bajs bajs bajsbaajasjd</p>
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
