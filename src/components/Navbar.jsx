import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `nav-link px-3 fw-medium ${isActive ? 'active text-primary' : 'text-dark'}`

  return (
    <nav className={`navbar navbar-expand-lg bg-white sticky-top py-3 ${scrolled ? 'shadow-sm' : ''}`}> 
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
          <span className="rounded-circle bg-primary d-inline-block" style={{width:10,height:10}} />
          <span className="fw-bold">SportifyGear</span>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu" aria-controls="navmenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item"><NavLink className={linkClass} to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className={linkClass} to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className={linkClass} to="/services">Services</NavLink></li>
            <li className="nav-item"><NavLink className={linkClass} to="/products">Products</NavLink></li>
            <li className="nav-item"><NavLink className={linkClass} to="/pricing">Pricing</NavLink></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle px-3" href="#" id="policies" role="button" data-bs-toggle="dropdown" aria-expanded="false">Legal</a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="policies">
                <li><NavLink className="dropdown-item" to="/terms">Terms & Conditions</NavLink></li>
                <li><NavLink className="dropdown-item" to="/privacy">Privacy Policy</NavLink></li>
              </ul>
            </li>
            <li className="ms-lg-3 mt-3 mt-lg-0">
              <NavLink className="btn btn-primary rounded-pill px-4" to="/pricing">Get Started</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
