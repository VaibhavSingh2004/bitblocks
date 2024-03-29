import React from 'react'
import puzzle from "../assets/homeimage.jpg"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='Home'>
      <div className='img'>
        <Link to="/">
            <img className='puzzleimg' src={puzzle} alt="logo" loading='lazy'/>
        </Link>
      </div>
      <div className='Homediv'>
        <h1 className='Homeheading'>Welcome to</h1>
        <h1 className='Appheading'> BIT BLOCKS</h1>
      </div>
      <div className='homebtns'>
      <Link to='https://bitblocks.my.canva.site/learn' className='learntext'>
        <button className='button-25'>LEARN</button>
      </Link>
        <button className='button-26'>EXPLORE</button>
        <Link to="/board">
            <button className='button-27'>PLAY</button>
        </Link>
      </div>
    </div>
  )
}

export default Home