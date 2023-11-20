import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className="py-3 mt-4 border-top bg-dark navbar-dark">
            <ul className="nav justify-content-center pb-3">
                <li className="nav-item">
                    <Link to="/" className="nav-link px-2 text-white-50">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link px-2 text-white-50">Contato</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link px-2 text-white-50">Sobre</Link>
                </li>
            </ul>
            <hr className='w-50 border-white m-auto' />
            <p className="text-center text-white-50 pt-3">© 2023 The Traders, Inc</p>
        </footer>

    )
}
export default Footer