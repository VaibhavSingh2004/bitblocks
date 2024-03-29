import React from 'react'
import {Link} from 'react-router-dom'
import partnership from "../assets/partnership.jpg"
const Navbar = () => {
  return (
    <div className="mynav">
        <Link to="/">
            <img className='image' src={partnership} alt="logo" loading='lazy'/>
        </Link>
        <nav className='routes'>
          <ul className='routes'>
            <li >
              <Link to="/" className='list'>Home</Link>
            </li>
            <li>
              <Link to="/Contact" className='list'>Contact</Link>
            </li>
            <li>
              <Link to="/Info" className='list'>About</Link>
            </li>
          </ul>
        </nav>
        <Link to="/board">
            <button className='bn3637 bn36'>
                Play
            </button>
        </Link>
    </div>
  )
}
export default Navbar;