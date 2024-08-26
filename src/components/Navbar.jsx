import React, { useEffect, useState } from 'react';
import './../assets/css/Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className='navbar-container shadow-lg'>
      <div className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <div className='w-full px-10 py-0 flex items-center justify-between navbar'>
          <span>
            <img src="brand.png" alt="logo" className='w-20' />
          </span>
          <ul className={`flex gap-8 font-bold text-xl ${showMenu ? 'show' : ''}`}>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About Us</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#articles" onClick={closeMenu}>Blog</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact Us</a></li>
          </ul>
          <div className='navbar-toggler md:hidden' onClick={toggleMenu}>
            <i className='fas fa-bars'></i>
          </div>
        </div>
      </div>
    </div>
  );
}
