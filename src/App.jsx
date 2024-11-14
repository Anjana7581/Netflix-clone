import Home from '../src/pages/Home/Home.jsx'
import Login from '../src/pages/Login/Login.jsx'
import { Routes,Route } from 'react-router-dom'
import Player from './pages/Player/Player.jsx'
import TvShows from './pages/Otherpages/TvShows.jsx'
import Movies from './pages/Otherpages/Movies.jsx'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/login' element ={<Login/>}/>
        <Route path='/player/:key/:id' element={<Player/>}/>
        <Route path='/tvshow' element ={<TvShows/>}/>
        <Route path='/movies' element ={<Movies/>}/>

      </Routes>

    </div>
  )
}

export default App