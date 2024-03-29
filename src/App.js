// import './App.css';
// import Board from './components/board/Board'

// const App = () => <div className="App"><Board/></div>

// export default App;


import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Info from './pages/Info';
import Contact from './pages/Contact';
import { Route,Routes } from 'react-router-dom';
import Board from './components/board/Board';
function App() {
  return (
  <div className="appdiv">
    <Navbar/> 
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/Info" element= {<Info/>}/>
      <Route path="/Contact" element= {<Contact/>}/>
      <Route path="/board" element= {<Board/>}/>
    </Routes>
  </div>
  )
}

export default App;