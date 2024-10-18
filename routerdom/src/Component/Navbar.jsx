import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div>
        <ul>
            {/* |<link to=""><li>Home</li></link>
            |<link to="/About"><li>About </li></link>
            |<link to="/Contact"><li>Contact</li></link>
            |<link to="/"><li>Github</li></link>
            |<link to="/"><li>Golu</li></link> */}

            <Link to="/"> Home</Link>
            <Link to="/about">About  </Link>
            <Link to="/contact">contact </Link>
            <Link to="">home  </Link>
        </ul>
      </div>
    </>
  )
}

export default Navbar
