import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/BursaLogo.jpg'
function Navbar() {
  return (
    <>
        <div>
            <nav>
                <img src={logo} alt="logo" className='logo'/>
                <ul>
                    <li>
                        <a href='#'>Özel Rota Bildirme</a>
                    </li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default Navbar