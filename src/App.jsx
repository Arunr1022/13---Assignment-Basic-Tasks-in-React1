import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbarheading'
import Mid from './components/midsection'
import ListGame from './components/ListofGames'
import ListGame2 from './components/ListofGamesec2'
import Gamestyle from './components/Gamestyle'
import Lou from './Carts/Lastofus'
import Godofwar from './Carts/Godofwar'
import './App.css'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Mid />
            <ListGame />
            <ListGame2 />
          </>
        } />
        <Route path='/lou' element={<Lou />} />
        <Route path='/godofwar' element={<Godofwar />} />
      </Routes>
    </>
  )
}

export default App
