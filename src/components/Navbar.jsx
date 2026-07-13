import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from './Logo'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/what-we-do', label: 'What We Do' },
  { to: '/our-group', label: 'Our Group' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/vision-mission', label: 'Vision & Values' },
  { to: '/portfolio', label: 'Portfolio' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Logo size="lg" onClick={() => setOpen(false)} />

        <nav className={`navbar-links ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `navbar-link ${isActive ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="navbar-pill"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="navbar-link-label">{link.label}</span>
                </>
              )}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn btn--primary navbar-cta" onClick={() => setOpen(false)}>
            Partner With Us
          </NavLink>
        </nav>

        <button
          type="button"
          className={`navbar-toggle ${open ? 'is-open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar
